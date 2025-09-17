from django.urls import path
from .views import CourseListView, ApplicationCreateView, CourseDetailView

urlpatterns = [
    path("courses/", CourseListView.as_view(), name="course-list"),
    path("courses/<int:pk>/", CourseDetailView.as_view(), name="course-detail"),
    path("applications/", ApplicationCreateView.as_view(), name="application-create"),
    path("applications/<int:pk>", ApplicationCreateView.as_view(), name="application-status"),
]
