# Wallpapers web application

Głównym zadaniem aplikacji jest możliwość przeglądania tapet dodanych przez użytkowników. Aplikacja ma autoryzację opartą o tokeny - można założyć konto, zalogować się i wylogować. 
Zalogowany użytkownik ma dodatkowe funkcje m.in dodawanie tapet i komentarzy. Może także przeglądać swój profil, gdzie znajdują sie jego dane i dodane przez niego tapety.

Administrator ma dostęp do dodatkowego panelu wystawionego na innym porcie, dzięki któremu ma możliwość zarządzania danymi użytkowników przy zachowaniu zasad bezpieczeństwa (m.in hashowanie hasła). 

## Prezentacja front-end

### Strona główna

![main_page](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/main_page.png)

### Widok tapety

![wallpaper_view](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/wallpaper_view.png)

### Profil

![profil](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/profile.png)

### Logowanie

![login](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/login.png)

### Rejestracja 

![register](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/register.png)

## Prezentacja back-end

### Widok administratora

![admin_view](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/admin_view.png)

### Widok administratora - tapety

![wallpapers_admin](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/wallpapers_admin.png)

### Widok administratora - tapeta

![wallpaper_admin](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/wallpaper_admin.png)

### Widok REST API - tapety

![wallpapers_rest](https://github.com/MykolaOstapchuk/Web-Dev/blob/main/web-project/docs/wallpaper_rest.png)

## Technologie
- React (m.in axios, reactstrap)
- Django (m.in djangorestframework, django-cors-headers, Pillow)

## Uruchomienie
- Frontend:
1. Instalacja Node globalnie
2. Przejście do katalogu *frontend*
```
npm install
```
```
npm start
```

- Backend:
1. Instalacja pipenv globalnie (lub ręcznie pip)
2. Przejście do katalogu *backend*
```
pipenv shell
```
```
pipenv install
```
3. Przejście do katalogu z *manage.py*
```
python manage.py runserver
