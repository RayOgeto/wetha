from django.urls import path
from . import views

urlpatterns = [
    path('weather/<str:location>/', views.get_weather, name='get_weather'),
]
