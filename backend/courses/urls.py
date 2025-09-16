from django.urls import path
from .views import CourseListView, ApplicationCreateView

urlpatterns = [
    path("courses/", CourseListView.as_view(), name="course-list"),
    path("applications/", ApplicationCreateView.as_view(), name="application-create"),
]
