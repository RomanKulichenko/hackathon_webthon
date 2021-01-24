from django.forms import ModelChoiceField
from django.contrib import admin

from .models import *


# Убираем ненужные категории при добавлении определённых видов товаров
class BuckwheatProductAdmin(admin.ModelAdmin):
    
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "category":
            return ModelChoiceField(Category.objects.filter(slug="buckwheat"))
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


admin.site.register(Category)
admin.site.register(BuckwheatProduct, BuckwheatProductAdmin)

