from rest_framework import routers
from tasks.views import *

router = routers.DefaultRouter()
router.register(r'api/categories', CategoryViewSet, basename='categories')

urlpatterns = router.urls
