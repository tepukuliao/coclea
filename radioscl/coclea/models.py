from django.db import models

class EstacionRadio(models.Model):
    nombre = models.CharField(max_length=100)
    stream_url = models.URLField()
    dial = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.nombre} - {self.dial}"