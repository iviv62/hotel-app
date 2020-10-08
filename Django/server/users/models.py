from django.db import models


from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=20,null=True)
    address= models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.username
