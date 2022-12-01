from django.urls import path
from . import views

urlpatterns = [
    path('listdata', views.listData, name="liste"),
    path('addData', views.createData, name="create"),
    path('deleteData/<int:id>', views.deleteData, name="delete"),
    path('updateData/<int:id>', views.updateData, name="update"),
    path('readData/<int:id>', views.readData, name="read")

]