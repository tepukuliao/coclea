from django.shortcuts import render
from django.http import JsonResponse
from .models import EstacionRadio


def home(request):
    estaciones = EstacionRadio.objects.all()
    return render(request, "home.html", {"estaciones": estaciones})

def mini_player(request):
    estaciones = EstacionRadio.objects.all()
    return render(request, "mini_player.html", {"estaciones": estaciones})

def emisoras_json(request):
    emisoras = EstacionRadio.objects.all()
    data = [
        {
            "artist": emisora.nombre,
            "title": emisora.dial,
            "url": emisora.stream_url
        }
        for emisora in emisoras
    ]
    return JsonResponse(data, safe=False)

