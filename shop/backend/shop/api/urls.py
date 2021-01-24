from django.urls import path, include
from shop.api.api_views import *

urlpatterns = [
   path('products/buckwheat/', BuckwheatProductView.as_view())
]
