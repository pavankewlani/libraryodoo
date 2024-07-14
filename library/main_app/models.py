from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class User_table(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    firstname = models.CharField(max_length=255, default=None)
    lastname = models.CharField(max_length=255, default=None)


class BookTable(models.Model):
    choices = [
        ("fiction", "fiction"),
        ("history", "history"),
        ("selfhelp", "selfhelp"),
        ("philosophy", "philosophy"),
    ]
    isbn_code = models.IntegerField()
    name = models.CharField(max_length=255)
    auth_name = models.CharField(max_length=255)
    publisher = models.CharField(max_length=255)
    description = models.TextField()
    quantity = models.IntegerField()
    category = models.CharField(max_length=255, choices=choices)
    image = models.ImageField()


class Issueddata(models.Model):
    user = models.CharField(max_length=255)
    isbn_code = models.IntegerField()
    bookname = models.CharField(max_length=255)
    auth_name = models.CharField(max_length=255)
    publisher = models.CharField(max_length=255)
    description = models.TextField()
    issue_date = models.TimeField()
    quantity = models.IntegerField()
    submit_date = models.TimeField()
