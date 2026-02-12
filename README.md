Создаем папку проекта Amur

npm create vite@latest front -- --template react
cd front
npm install
npm run dev - запуск 

npm install axios react-router-dom





BACKEND:

Создайте папку проекта и виртуальное окружение
mkdir back && cd back
python3 -m venv venv
source venv/bin/activate

Установите библиотеки
pip install django djangorestframework django-cors-headers drf-spectacular

applic - проект api- приложение содержащее model и т.д.
django-admin startproject applic .
python3 manage.py startapp api

Настройка settings.py:
Добавьте 'rest_framework', 'corsheaders', 'api', 'drf_spectacular'  в INSTALLED_APPS.
Добавьте 'corsheaders.middleware.CorsMiddleware' в самое начало MIDDLEWARE.
Укажите CORS_ALLOWED_ORIGINS = ["http://localhost:5173"]
Укажите REST_FRAMEWORK = {
   # Указываем Spectacular в качестве генератора схемы
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}
=============================================================================
Зарегистрируйте эндпоинты для самой схемы и интерфейса документации (Swagger): 

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    # Путь для генерации самой схемы (YAML/JSON)
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    
    # Путь для красивого интерфейса Swagger UI
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]

=============================================================================
python manage.py runserver
