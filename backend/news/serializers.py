from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('title', 'url')

class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ("username", "email", "password")
