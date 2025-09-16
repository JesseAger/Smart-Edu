from django.db import models
from django.conf import settings
from courses.models import Course


class Payment(models.Model):
    enrollment = models.ForeignKey(Enrollment, on_delete=models.CASCADE, related_name="payments")
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    receipt_number = models.CharField(max_length=100, unique=True)
    confirmed = models.BooleanField(default=False)


    def __str__(self):
        return f"{self.enrollment.student} - {self.amount}"

class Invoice(models.Model):
    enrollment = models.OneToOneField(Enrollment, on_delete=models.CASCADE, related_name="invoice")
    total_cost = models.DecimalField(max_digits=10, decimal_places=2)
    minimum_required = models.DecimalField(max_digits=10, decimal_places=2)
    paid = models.BooleanField(default=False)


    def __str__(self):
        return f"Invoice for {self.enrollment}"