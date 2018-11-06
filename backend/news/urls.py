from django.urls import path, include
from .views import ItemViewSet, RegisterUsers
from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import (obtain_jwt_token, refresh_jwt_token,
                                      verify_jwt_token)

router = DefaultRouter()
router.register(r'items', ItemViewSet, base_name='user')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', RegisterUsers.as_view(), name='register'),
    path('auth/login/', obtain_jwt_token, name='login'),
    path('auth/refresh/', refresh_jwt_token, name='refresh'),
    path('auth/verify/', verify_jwt_token, name='verify')
]

