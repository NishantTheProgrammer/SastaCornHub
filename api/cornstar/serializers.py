from rest_framework import serializers

from . import models


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Actors

        fields = ['name']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category

        fields = ['name']


class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Video
        fields = ['id', 'title', 'url', 'actors']

