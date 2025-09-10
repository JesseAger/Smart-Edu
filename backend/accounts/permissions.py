from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        u = getattr(request, "user", None)
        return bool(u and u.is_authenticated and (u.is_superuser or getattr(u, "role", "") == "ADMIN"))

class IsInstructor(BasePermission):
    def has_permission(self, request, view):
        u = getattr(request, "user", None)
        return bool(u and u.is_authenticated and getattr(u, "role", "") == "INSTRUCTOR")

class IsStudent(BasePermission):
    def has_permission(self, request, view):
        u = getattr(request, "user", None)
        return bool(u and u.is_authenticated and getattr(u, "role", "") == "STUDENT")


class IsSelfOrAdmin(BasePermission):
    def has_object_permission(self, request, view, obj):
        u = getattr(request, "user", None)
        if not (u and u.is_authenticated):
            return False
        return bool(u.is_superuser or getattr(u, "role", "") == "ADMIN" or obj == u)