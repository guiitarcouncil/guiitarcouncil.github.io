from django.urls import path
from .views import ContactView

urlpatterns = [
    path('submit/', ContactView.as_view(), name='contact-submit'),  
]
