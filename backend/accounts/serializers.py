from rest_framework import serializers
from .models import User


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "role",
        "status",
        "reg_number",
        "stars",
        "profile_photo",
        ]
        read_only_fields = ("username", "role", "status", "reg_number", "stars")

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "profile_photo"]

class AdminUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "role",
        "status",
        "reg_number",
        "is_active",
        "stars",
        ]
        read_only_fields = ("username", "reg_number")

class AwardStarsSerializer(serializers.Serializer):
    amount = serializers.IntegerField(min_value=1)