from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from graphene_django.views import GraphQLView
from .schema import schema
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('graphql/', csrf_exempt(GraphQLView.as_view(
        graphiql=True,
        schema=schema,
    
    ))),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)