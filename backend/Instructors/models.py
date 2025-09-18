from django.db import models

class Instructor(models.Model):
    title = models.CharField(max_length=5)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True, max_length=50)
    phone = models.CharField(unique=True, max_length=13)
    address = models.CharField(max_length=200)
    department = models.CharField(max_length=25)
    experience = models.DecimalField(max_digits=2, decimal_places=0, default=1)

    def __str__(self):
        return f"{self.title} {self.last_name} - {self.department}"