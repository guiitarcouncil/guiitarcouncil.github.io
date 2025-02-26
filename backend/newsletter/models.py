from django.db import models

class Newsletter(models.Model):
    email = models.EmailField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
