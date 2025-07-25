from django.db import models
from django.conf import settings
from courses.models import Course

class Assignment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="assignments")
    title = models.CharField(max_length=255)
    description = models.TextField()
    deadline = models.DateTimeField()
    file = models.FileField(upload_to='assignments/files/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Submission(models.Model):
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE, related_name="submissions")
    student = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    file = models.FileField(upload_to='assignments/submissions/')
    submitted_at = models.DateTimeField(auto_now_add=True)
    feedback = models.TextField(blank=True, null=True)
    grade = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        unique_together = ('assignment', 'student')
