from django.db import models
from django.db import models
from users.models import CustomUser

from mapbox_location_field.models import LocationField


class House(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    floors = models.IntegerField()
    built_on = models.DateField()
    area = models.CharField(max_length=50)
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    price = models.FloatField()


    address = models.CharField(max_length=300,null=True)
    location = LocationField(null=True)
    city = models.CharField(max_length=300,null=True)

    img= models.ImageField(upload_to ='house-images/%Y/%m/%d/')
    created_on = models.DateTimeField(auto_now_add=True)
    posted_by =models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)
    
    

    def __str__(self):
        return self.title

    def desc_preview(self):
        return self.description[:50]

class Image(models.Model):
    image = models.ImageField(upload_to='house-images/%Y/%m/%d/')
    multiImage = models.ForeignKey(House, on_delete=models.CASCADE, related_name='other_images' )


