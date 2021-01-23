from django.db import models
from django.contrib.contenttypes.models import ContentType


# class LatestProductsManager:

#     @staticmethod
#     def get_products_for_main_page(*args, **kwargs):
#         products = []
#         ct_models = ContentType.objects.filter(model__in=args)
#         for ct_model in ct_models:
#             model_products = ct_model.model_class()._base_manager.all().order_by("-id")[:5]
#             products.extend(model_products)
#         return products


# class LatestProducts:

#     objects = LatestProductsManager()


class Category(models.Model):

    class Meta:
        verbose_name_plural = "Categories"

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
    image = models.URLField(verbose_name="Ссылка на изображение товара")
    price = models.DecimalField(max_digits=9, decimal_places=2, verbose_name="Цена")
    price_currency = models.CharField(max_length=25, default="грн", verbose_name="Валюта")
    producer = models.CharField(max_length=255, verbose_name="Производитель")

    def __str__(self):
        return self.title


class BuckwheatProduct(Product):

    link_to_shop = models.URLField(verbose_name="Ссылка на магазин")
    link_to_shop_logo = models.URLField(verbose_name="Ссылка на лого магазина")
    weight = models.IntegerField(verbose_name="Вес в граммах")

    def __str__(self):
        return f"{self.category.name} : {self.title}"