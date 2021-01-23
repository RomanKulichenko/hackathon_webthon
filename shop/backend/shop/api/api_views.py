from rest_framework import generics
from shop.models import BuckwheatProduct
from shop.api.serializers import BuckwheatProductListSerializer


class BuckwheatProductView(generics.ListAPIView):
    serializer_class = BuckwheatProductListSerializer
    queryset = BuckwheatProduct.objects.all()