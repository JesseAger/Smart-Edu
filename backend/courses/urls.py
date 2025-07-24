from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import CourseViewSet, EnrollmentViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'enrollments', EnrollmentViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
