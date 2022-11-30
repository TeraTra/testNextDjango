from django.urls import path
from . import views

urlpatterns = [
    path('listdata', views.listData, name="liste"),
    path('addData', views.createData, name="create")
]