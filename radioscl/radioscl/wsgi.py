import os
import sys

# Asegúrate de que la ruta es la de la carpeta donde está manage.py
path = os.path.expanduser('~/radioscl')
if path not in sys.path:
    sys.path.insert(0, path)

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'radioscl.settings')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()