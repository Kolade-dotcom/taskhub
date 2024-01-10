from tasks.serializers import *
from tasks.models import *
from rest_framework import viewsets

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()