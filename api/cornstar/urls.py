from rest_framework.routers import DefaultRouter
router = DefaultRouter()

from . import views

router.register('actors', views.ActorsViewSet)
router.register('category', views.CategoryViewSet)
router.register('video', views.VideoViewSet)

urlpatterns = router.urls