from django.http import HttpResponse
from django.urls import path

from mainapp import views

urlpatterns = [
    path('', views.index)
    ]

