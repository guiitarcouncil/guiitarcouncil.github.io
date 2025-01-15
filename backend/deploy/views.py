import hmac
import hashlib
import subprocess
from django.http import HttpResponse
from django.conf import settings

# Retrieve your secret key from settings
GITHUB_SECRET = settings.GITHUB_WEBHOOK_SECRET

def verify_github_signature(request):
    # GitHub sends the signature header
    signature = request.META.get('HTTP_X_HUB_SIGNATURE_256')
    if not signature:
        return False
    
    # Body of the request
    payload = request.body
    secret = bytes(GITHUB_SECRET, 'utf-8')
    
    # Create the expected signature
    hash = hmac.new(secret, payload, hashlib.sha256)
    expected_signature = 'sha256=' + hash.hexdigest()

    # Compare the GitHub signature with the expected signature
    return hmac.compare_digest(signature, expected_signature)

def deploy(request):
    if not verify_github_signature(request):
        return HttpResponse("Unauthorized", status=403)

    # Trigger the deployment by calling a shell script
    subprocess.call(["/home/guiitarcouncil/guiitarcouncil.github.io/backend/deploy.sh"])

    return HttpResponse("Deployment triggered successfully!")
