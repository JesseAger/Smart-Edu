from rest_framework import serializers
from .models import Instructor

class InstructorSerializer(serializers.ModelSerializer):
    class meta:
        model = Instructor
        fields = "__all__"
        