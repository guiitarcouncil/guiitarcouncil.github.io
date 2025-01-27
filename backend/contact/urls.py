from django.urls import path
from .views import ContactView

urlpatterns = [
    path('https://guiitarcouncil.pythonanywhere.com/api/contact/submit/', ContactView.as_view(), name='contact-submit'),
]
