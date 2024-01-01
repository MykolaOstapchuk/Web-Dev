from django.contrib import admin

from .models import Wallpaper, Comment


class WallpaperAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Wallpaper, WallpaperAdmin)


class CommentAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)


admin.site.register(Comment, CommentAdmin)
