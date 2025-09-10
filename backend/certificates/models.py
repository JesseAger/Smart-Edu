from django.db import models
from django.conf import settings
from courses.models import Enrollment


class Certificate(models.Model):
    enrollment = models.OneToOneField(Enrollment, on_delete=models.CASCADE, related_name="certificate")
    issued_at = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)
    file = models.FileField(upload_to="certificates/", null=True, blank=True)


    def __str__(self):
        return f"Certificate for {self.enrollment.student} - {self.enrollment.course}"