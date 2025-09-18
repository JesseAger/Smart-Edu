from django.contrib.auth.models import AbstractUser
from django.core.validators import FileExtensionValidator
from django.db import models

class User(AbstractUser):
    class Roles(models.TextChoices):
        STUDENT = "STUDENT", "Student"
        INSTRUCTOR = "INSTRUCTOR", "Instructor"
        ADMIN = "ADMIN", "Admin"


    class Status(models.TextChoices):
        ACTIVE = "ACTIVE", "Active"
        SUSPENDED = "SUSPENDED", "Suspended"
        EXPELLED = "EXPELLED", "Expelled"


    role = models.CharField(max_length=16, choices=Roles.choices, default=Roles.STUDENT)
    status = models.CharField(max_length=16, choices=Status.choices, default=Status.ACTIVE)


    reg_number = models.CharField(max_length=20, unique=True, null=True, blank=True)
    single_use_password = models.BooleanField(default=False)


    stars = models.PositiveIntegerField(default=0)

    profile_photo = models.ImageField(
    upload_to="profiles/",
    null=True,
    blank=True,
    validators=[FileExtensionValidator(["jpg", "jpeg", "png"])],
    )


    def award_stars(self, amount: int):
        try:
            amt = int(amount)
        except Exception:
            amt = 0
        if amt > 0:
            self.stars = (self.stars or 0) + amt
            self.save(update_fields=["stars"]) 


    def suspend(self):
        self.status = self.Status.SUSPENDED
        self.save(update_fields=["status"]) # noqa: F821


    def expel(self):
        self.status = self.Status.EXPELLED
        self.is_active = False
        self.save(update_fields=["status", "is_active"]) # noqa: F821