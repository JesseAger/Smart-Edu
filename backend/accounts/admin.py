from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from .models import User




@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    list_display = (
        "id",
        "username",
        "email",
        "first_name",
        "last_name",
        "role",
        "status",
        "reg_number",
        "stars",
        "is_active",
    )
    list_filter = ("role", "status", "is_active", "is_staff", "is_superuser")
    search_fields = ("username", "email", "first_name", "last_name", "reg_number")
    readonly_fields = ("last_login", "date_joined")
    fieldsets = (
        (None, {"fields": ("username", "password")}),
        ("Personal info", {"fields": ("first_name", "last_name", "email", "profile_photo")}),
        (
        "Uptown LMS",
        {"fields": ("role", "status", "reg_number", "single_use_password", "stars")},
        ),
        (
        "Permissions",
        {"fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")},
        ),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
    )