from django.contrib.auth.password_validation import validate_password
from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .models import User
from .permissions import IsAdmin, IsSelfOrAdmin
from .serializers import (
    ProfileSerializer,
    ProfileUpdateSerializer,
    AdminUserSerializer,
    AwardStarsSerializer,
)

class MeViewSet(viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]


    def get_object(self):
        return self.request.user


    @action(detail=False, methods=["get"], url_path="profile")
    def profile(self, request):
        return Response(ProfileSerializer(self.get_object()).data)


    @action(detail=False, methods=["patch"], url_path="profile")
    def update_profile(self, request):
        ser = ProfileUpdateSerializer(self.get_object(), data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ProfileSerializer(self.get_object()).data)


    @action(detail=False, methods=["post"], url_path="change-password")
    def change_password(self, request):
        old = request.data.get("old_password")
        new = request.data.get("new_password")
        if not new:
            return Response({"detail": "new_password required"}, status=400)
        if not request.user.check_password(old):
            return Response({"detail": "old_password incorrect"}, status=400)
        validate_password(new, request.user)
        request.user.set_password(new)
        request.user.single_use_password = False
        request.user.save(update_fields=["password", "single_use_password"])
        return Response({"detail": "password changed"})




class AdminUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by("id")
    serializer_class = AdminUserSerializer
    permission_classes = [IsAuthenticated & IsAdmin]


    @action(detail=True, methods=["post"], url_path="suspend")
    def suspend(self, request, pk=None):
        user = self.get_object()
        user.suspend()
        return Response({"detail": "user suspended"})


    @action(detail=True, methods=["post"], url_path="expel")
    def expel(self, request, pk=None):
        user = self.get_object()
        user.expel()
        return Response({"detail": "user expelled"})


    @action(detail=True, methods=["post"], url_path="award-stars")
    def award_stars(self, request, pk=None):
        user = self.get_object()
        ser = AwardStarsSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        user.award_stars(ser.validated_data["amount"])
        return Response({"detail": "stars awarded", "stars": user.stars})

