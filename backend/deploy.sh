#!/bin/bash

# Navigate to your Django project directory
cd /home/guiitarcouncil/guiitarcouncil.github.io/backend

# Pull the latest changes from GitHub
echo "Pulling latest changes from GitHub..."
git pull origin main

# Install/update Python dependencies
echo "Installing dependencies..."
pip3 install --user -r requirements.txt

# Run database migrations
echo "Running database migrations..."
python3 manage.py migrate

# Collect static files
echo "Collecting static files..."
python3 manage.py collectstatic --noinput

# Restart the PythonAnywhere web app
echo "Restarting the PythonAnywhere web app..."
pythonanywhere reload guiitarcouncil

echo "Deployment completed successfully!"
