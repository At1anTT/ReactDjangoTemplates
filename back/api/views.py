from django.shortcuts import render

from rest_framework.decorators import api_view 

# используем декоратор чтобы разрешить только POST-запросы
@api_view(['POST'])
def hello_amur(request):
        return Response({"message": "привет Amur"})