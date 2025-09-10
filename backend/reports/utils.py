from courses.models import Course, Enrollment
from payments.models import Payment
from assignments.models import Submission
from .models import CourseReport


def generate_course_report(course: Course):
    total_students = Enrollment.objects.filter(course=course).count()
    total_revenue = Payment.objects.filter(enrollment__course=course, confirmed=True).aggregate(models.Sum("amount"))["amount__sum"] or 0
    avg_grade = Submission.objects.filter(assignment__course=course, grade__isnull=False).aggregate(models.Avg("grade"))["grade__avg"]


    report, created = CourseReport.objects.update_or_create(
    course=course,
    defaults={
    "total_students": total_students,
    "total_revenue": total_revenue,
    "average_grade": avg_grade,
    },
    )
    return report