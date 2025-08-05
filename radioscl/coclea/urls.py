from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("emisoras-json/", views.emisoras_json, name="emisoras_json"),
    path("mini/", views.mini_player, name="mini_player"),
    
]