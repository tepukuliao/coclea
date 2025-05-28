from django.shortcuts import render
from .models import EstacionRadio


def home(request):
    estaciones = EstacionRadio.objects.all()
    return render(request, "home.html", {"estaciones": estaciones})

