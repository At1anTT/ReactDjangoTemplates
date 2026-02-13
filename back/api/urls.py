from django.urls import path
from . import views
from .views import hello_amur


urlpatterns = [
    path('hello/', hello_amur, name='hello_amur')
]