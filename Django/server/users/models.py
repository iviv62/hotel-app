from django.db import models
from api.models import House
from django.conf import settings


from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=20,null=True)
    

    def __str__(self):
        return self.username


class SavedHouses(models.Model):

    user=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    favourites = models.ForeignKey(House, on_delete=models.CASCADE ,blank=True,null=True)

    