from django.contrib import admin

from main_app.models import BookTable, Issueddata

# Register your models here.

admin.site.register(BookTable)
admin.site.register(Issueddata)
