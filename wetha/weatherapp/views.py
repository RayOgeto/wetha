from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
import requests

def get_weather(request, location):
    api_key = 'b2c6bd37612d81823f71ec3c1774bace'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data)

def home(request):
    return HttpResponse("The Wetha App")
# Create your views here.
