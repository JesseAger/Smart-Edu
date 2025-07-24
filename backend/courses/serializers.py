from rest_framework import serializers
from .models import Course, Enrollment, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    instructor = serializers.StringRelatedField()

    class Meta:
        model = Course
        fields = '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'
