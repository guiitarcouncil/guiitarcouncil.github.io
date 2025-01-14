from django.urls import path
from . import views

urlpatterns = [
    path('deploy/', views.deploy, name='deploy'),
]
