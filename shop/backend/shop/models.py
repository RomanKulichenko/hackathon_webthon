from django.db import models


class Category(models.Model):

    name = models.CharField(max_length=255, verbose_name="Имя категории")
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name



class Product(models.Model):

    # Общее описание любого продукта
    class Meta:
        abstract = True

    category = models.ForeignKey(Category, verbose_name="Категория", on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name="Наименование товара")
    slug = models.SlugField(unique=True)
    image = models.ImageField(verbose_name="Изображение")
    price = models.IntegerField(blank=False, verbose_name="Цена",)
    producer = models.CharField(max_length=255, verbose_name="Производитель")
    # description = models.TextField(verbose_name="Описание", null=True)

    def __str__(self):
        return self.title



class BuckwheatProduct(Product):

    link = models.URLField()
    weight = models.IntegerField(verbose_name="Вес")

    def __str__(self):
        return f"{self.category.name} : {self.title}"