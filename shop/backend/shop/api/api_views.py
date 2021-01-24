from rest_framework.generics import ListAPIView
from shop.models import BuckwheatProduct
from shop.api.serializers import BuckwheatProductListSerializer
from rest_framework import filters


# order_by_price=high_to_low
# order_by_price=low_to_high

# order_by_weight=high_to_low
# order_by_weight=low_to_high

# search=<название товара>


class BuckwheatProductView(ListAPIView):
    queryset = BuckwheatProduct.objects.all()
    serializer_class = BuckwheatProductListSerializer
    filter_backends = [filters.SearchFilter]

    # Поиск без учёта регистра по названию продукта
    search_fields = ['$title']

    # '^' Starts-with search.
    # '=' Exact matches.
    # '@' Full-text search. (Currently only supported Django's PostgreSQL backend.)
    # '$' Regex search.

    #  Переопределяем метод в классе ListAPIView
    def get_queryset(self):
        # print(self.request.query_params)
        queryset = super().get_queryset()

        order_by_price = self.request.query_params.get("order_by_price")
        order_by_weight = self.request.query_params.get("order_by_weight")

        if order_by_price and order_by_weight == None:
            if order_by_price == "high_to_low":
                queryset = queryset.order_by("price").reverse()
            elif order_by_price == "low_to_high":
                queryset = queryset.order_by("price")

        elif order_by_weight and order_by_price == None:
            if order_by_weight == "high_to_low":
                queryset = queryset.order_by("weight").reverse()
            elif order_by_weight == "low_to_high":
                queryset = queryset.order_by("weight")

        return queryset