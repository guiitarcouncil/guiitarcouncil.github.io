from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', include('contact.urls')),  # Include the contact app URLs correctly
]
