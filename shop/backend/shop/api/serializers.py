from rest_framework import serializers
from shop.models import BuckwheatProduct


class BuckwheatProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuckwheatProduct
        fields = "__all__"
