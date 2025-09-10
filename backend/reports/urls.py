from rest_framework.routers import DefaultRouter
from .views import CourseReportViewSet

router = DefaultRouter()
router.register(r"reports", CourseReportViewSet, basename="report")

urlpatterns = router.urls