from django.db import models
from courses.models import Course, Enrollment
from payments.models import Payment


class CourseReport(models.Model):
    course = models.OneToOneField(Course, on_delete=models.CASCADE, related_name="report")
    total_students = models.PositiveIntegerField(default=0)
    total_revenue = models.DecimalField(max_digits=12, decimal_places=2, default=0.0)
    average_grade = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    generated_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"Report - {self.course.title}"