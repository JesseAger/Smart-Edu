from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from courses.models import Course
from .models import CourseReport
from .serializers import CourseReportSerializer
from .utils import generate_course_report


class CourseReportViewSet(viewsets.ModelViewSet):
    queryset = CourseReport.objects.all()
    serializer_class = CourseReportSerializer
    permission_classes = [permissions.IsAuthenticated]


    @action(detail=True, methods=["post"], permission_classes=[permissions.IsAdminUser])
    def regenerate(self, request, pk=None):
        report = self.get_object()
        updated_report = generate_course_report(report.course)
        serializer = self.get_serializer(updated_report)
        return Response(serializer.data)


    @action(detail=False, methods=["post"], permission_classes=[permissions.IsAdminUser])
    def generate_all(self, request):
        for course in Course.objects.all():
            generate_course_report(course)
        return Response({"status": "all reports generated"})

