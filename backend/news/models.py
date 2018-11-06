from django.db import models
from django.contrib.auth.models import User

#  Item:
#    - Title
#    - URL
#    - owner (User)

class Item(models.Model):
    title = models.CharField(max_length=255, null=False)
    url = models.CharField(max_length=255, null=False)
    owner = models.ForeignKey('auth.User', related_name='items', editable=False, on_delete=models.CASCADE)
