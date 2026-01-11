from django.db import models

class EstacionRadio(models.Model):
    nombre = models.CharField(max_length=100)
    stream_url = models.URLField()
    dial = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.nombre} - {self.dial}"
    
class MensajeMuro(models.Model):
    nombre = models.CharField(max_length=30)
    mensaje = models.TextField(max_length=500)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre}: {self.mensaje[:20]}"