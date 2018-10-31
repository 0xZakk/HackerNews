from django.db import models

#  Item:
#    - Title
#    - URL
#    - owner (User)

class Item(models.Model):
    title = models.CharField(max_length=255, null=False)
    url = models.CharField(max_length=255, null=False)
