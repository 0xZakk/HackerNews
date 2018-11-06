from django.shortcuts import render, redirect
from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer, TokenSerializer, UserSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework import permissions, generics
from rest_framework.views import status
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly

from rest_framework_jwt.settings import api_settings
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class RegisterUsers(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        password = request.data.get("password", "")

        if not username and not password:
            return Response(
                data={
                    "message": "username and password are required to register a user"
                },
                status=status.HTTP_400_BAD_REQUEST
            )
        new_user = User.objects.create_user(
            username=username,
            password=password,
        )

        payload = jwt_payload_handler(new_user)
        token = jwt_encode_handler(payload)

        return Response(data=token, status=status.HTTP_201_CREATED)
