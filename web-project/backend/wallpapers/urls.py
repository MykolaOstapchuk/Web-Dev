from django.urls import path

from .views import WallpaperList, WallpaperDetail, CommentList, CommentDetail

urlpatterns = [
    path('', WallpaperList.as_view()),
    path('<int:pk>', WallpaperDetail.as_view()),
    path('comments/', CommentList.as_view()),
    path('comments/<int:pk>/', CommentDetail.as_view()),
]
