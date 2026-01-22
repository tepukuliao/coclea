from django.shortcuts import render
from django.http import JsonResponse
from .models import EstacionRadio, MensajeMuro
from django.views.decorators.csrf import csrf_exempt


def home(request):
    estaciones = EstacionRadio.objects.all()
    mensajes = MensajeMuro.objects.order_by('-fecha')[:50]
    return render(request, "home.html", {"estaciones": estaciones, "mensajes": mensajes})

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


def publicar_mensaje(request):
    if request.method == "POST":
        nombre = request.POST.get("nombre", "").strip()
        mensaje = request.POST.get("mensaje", "").strip()

        if not nombre or not mensaje:
            return JsonResponse({"error": "Campos vacios"}, status=400)
        
        if len(nombre) > 30 or len(mensaje) > 500:
            return JsonResponse({"error": "Texto demasiado largo"}, status=400)
        
        msg = MensajeMuro.objects.create(
            nombre=nombre, 
            mensaje=mensaje
            )
        return JsonResponse({
            "nombre": msg.nombre,
            "mensaje": msg.mensaje,
            "fecha": msg.fecha.isoformat()
        })
    return JsonResponse({"error": "Metodo no permitido"}, status=405)

def obtener_mensajes(request):
    mensajes = MensajeMuro.objects.order_by('-fecha')[:50]
    data = [
        {
            "nombre": m.nombre,
            "mensaje": m.mensaje,
            "fecha": m.fecha.isoformat()
        }
        for m in mensajes
    ]
    return JsonResponse(data, safe=False)

