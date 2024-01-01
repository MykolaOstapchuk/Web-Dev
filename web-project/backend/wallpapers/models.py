from django.db import models


class Wallpaper(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='files/wallpapers')
    description = models.TextField()
    owner = models.ForeignKey(
        'auth.User', on_delete=models.CASCADE, related_name="wallpapers")


class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    owner = models.ForeignKey('auth.User', related_name='comments', on_delete=models.CASCADE)
    wallpaper = models.ForeignKey('Wallpaper', related_name='comments', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']
