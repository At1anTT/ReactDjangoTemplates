from django.urls import path
from . import views
from .vies import hello_amur


urlpatterns = [
    path('/hello', hello_amur, name='111')ж
]