from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("emisoras-json/", views.emisoras_json, name="emisoras_json"),
    
]