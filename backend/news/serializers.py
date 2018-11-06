from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Item

class ItemSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Item
        fields = ('id', 'title', 'url', 'owner')

class TokenSerializer(serializers.Serializer):
    token = serializers.CharField(max_length=255)

class UserSerializer(serializers.ModelSerializer):
    items = serializers.HyperlinkedRelatedField(many=True,
                                                view_name='item-detail',
                                                read_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password", "items")
