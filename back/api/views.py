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


@api_view(['GET'])
def readData(request, id):
    try: 
        post =Post.objects.get(id=id)
    except post.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = PostSerializer(post, context={'request':request})
        return Response(serializer.data)


@api_view(['POST'])
def createData(request):
    if request.method == "POST":
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)


@api_view(['DELETE'])
def deleteData(request, id):
    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)
    
    if request.method == "DELETE":
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def updateData(request, id):
    try: 
        posts =Post.objects.get(id=id)
    except posts.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    if request.method == "PUT":
        serializer = PostSerializer(posts, data=request.data, context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 