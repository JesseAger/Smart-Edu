from django.urls import path
from .views import AddInstructorView, GetInstructorView

urlpatterns = [
    path("instructors/", AddInstructorView.as_view(), name="add-instructor"),
    path("get-instructors/", GetInstructorView.as_view(), name="instructor-view"),
]
