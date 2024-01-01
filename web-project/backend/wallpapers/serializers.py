from rest_framework import serializers

from .models import Wallpaper, Comment


class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Comment
        fields = ['id', 'body', 'owner', 'wallpaper']


class WallpaperSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Wallpaper
        fields = ['id', 'name', 'image', 'description', 'owner', 'comments']
