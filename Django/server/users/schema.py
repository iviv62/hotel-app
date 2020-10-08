from django.contrib.auth import get_user_model
from .models import CustomUser

import graphene
from graphene_django import DjangoObjectType

class UserType(DjangoObjectType):

    class Meta:
        model=CustomUser
        exclude=["password",]

class Query(graphene.ObjectType):

    all_users=graphene.List(UserType)
    user=graphene.Field(UserType, id=graphene.Int())

    def resolve_all_users(self,info,**kwargs):
        return CustomUser.objects.all()

    def resolve_user(self,info,**kwargs):
        id=kwargs.get("id")
        if id is not None:
            return CustomUser.objects.get(id=id)

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
    
    def mutate(self, info, username, password, email):
        user=CustomUser(
            username=username,
            email=email
        )
        user.set_password(password)  
        user.save()
        return CreateUser(user=user)

class Mutation(graphene.ObjectType):
    create_user=CreateUser.Field()