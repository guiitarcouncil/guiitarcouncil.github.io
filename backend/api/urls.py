from django.urls import path
from .views import ProgramList

urlpatterns = [
    path('programs/', ProgramList.as_view(), name='program-list'),
]
