import hmac
import hashlib
from django.http import HttpResponse
import subprocess
from django.conf import settings

GITHUB_SECRET = settings.GITHUB_WEBHOOK_SECRET

def verify_github_signature(request):
    signature = request.META.get('HTTP_X_HUB_SIGNATURE_256')
    if not signature:
        return False

    payload = request.body
    secret = bytes(GITHUB_SECRET, 'utf-8')
    hash = hmac.new(secret, payload, hashlib.sha256)
    expected_signature = 'sha256=' + hash.hexdigest()

    return hmac.compare_digest(signature, expected_signature)

def deploy(request):
    if not verify_github_signature(request):
        return HttpResponse("Unauthorized", status=403)

    subprocess.call(["/home/guiitarcouncil/guiitarcouncil.github.io/backend/deploy.sh"])

    return HttpResponse("Deployment triggered successfully!")
