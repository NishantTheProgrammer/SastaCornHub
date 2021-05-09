from django.shortcuts import render

from rest_framework import viewsets

# Create your views here.

from . import serializers, models

class ActorsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ActorSerializer

    queryset = models.Actors.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.CategorySerializer
    queryset = models.Category.objects.all()

class VideoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.VideoSerializer
    queryset = models.Video.objects.all()
