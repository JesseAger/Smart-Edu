from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MeViewSet, AdminUserViewSet

router = DefaultRouter()
router.register(r"me", MeViewSet, basename="me")
router.register(r"users", AdminUserViewSet, basename="users")

urlpatterns = [
path("", include(router.urls)),
]