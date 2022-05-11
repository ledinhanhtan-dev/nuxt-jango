from rest_framework import serializers

from .models import Category, Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "get_absolutely_url",
            "description",
            "price",
            "get_image",
            "get_thumbnail"
        )

