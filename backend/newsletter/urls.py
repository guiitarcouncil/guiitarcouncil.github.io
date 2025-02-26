from django.urls import path
from .views import NewsletterView

urlpatterns = [
    path('submit/', NewsletterView.as_view(), name='contact-submit'),  
]
