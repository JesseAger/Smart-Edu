from django.urls import path
from .views import AddInstructorView

urlpatterns = [
    path("instructors/", AddInstructorView.as_view(), name="add-instructor"),
]
