from rest_framework import generics, status
from rest_framework.response import Response
from .models import Course, Application
from .serializers import CourseSerializer, ApplicationSerializer
from django.http import HttpResponse

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseDetailView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class ApplicationCreateView(generics.CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response(
            {"message": "Application submitted successfully", "data": response.data},
            status=status.HTTP_201_CREATED
        )
    
class ApplicationStatusView(generics.CreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def update(self, request, *args, **kwargs):
        application = self.get_object() 
        application.application_status = True 
        application.save()  
        
        serializer = self.get_serializer(application)
        return Response(
            {"message": "Application approved successfully!", "data": serializer.data},
            status=status.HTTP_202_ACCEPTED
        )

class ApplicationsView(generics.ListAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer


