from django.shortcuts import render
from .models import Instructor
from .serializers import InstructorSerializer
from rest_framework.response import Response
from rest_framework import generics, status

class AddInstructorView(generics.CreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

    def create(self, request, *args, **kwargs):
        response= super().create(request, *args, **kwargs)
        return Response(
            {"message": "Instructor Added Successfully", "data": response.data},
            status=status.HTTP_201_CREATED
        )

    

