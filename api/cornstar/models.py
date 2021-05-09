from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Actors(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()

    def __str__(self):
        return f"{self.name} ({self.age})"

class Video(models.Model):
    title = models.CharField(max_length=30)
    url = models.FileField(upload_to='videos')
    actors = models.ManyToManyField(Actors, null=True, blank=True)
    # catetory = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title
