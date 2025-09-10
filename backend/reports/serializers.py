from rest_framework import serializers
from .models import CourseReport


class CourseReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseReport
        fields = ["id", "course", "total_students", "total_revenue", "average_grade", "generated_at"]