from django.shortcuts import render
from .serializers import  PostSerializer
from .models import Post
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def listData(request):
    if request.method == "GET":
        data = Post.objects.all()
        serializer = PostSerializer(data, context={"request": request}, many=True)
        return Response(serializer.data)


@api_view(['POST'])
def createData(request):
    if request.method == "POST":
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)