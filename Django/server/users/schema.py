from .models import CustomUser,SavedHouses
from graphql import GraphQLError
from api.houses.schema import HouseType,House
import graphene
from graphene_django import DjangoObjectType
from graphql import GraphQLError

class UserType(DjangoObjectType):

    class Meta:
        model=CustomUser
        exclude=["password",]


class SavedHouseType(DjangoObjectType):

    class Meta:
        model=SavedHouses

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

class UpdateUser(graphene.Mutation):
    user = graphene.Field(UserType)

    class Arguments:
        user_id = graphene.Int(required=True)
        username = graphene.String()
        password = graphene.String()
        email = graphene.String()
        phone = graphene.String()
        first_name =  graphene.String()
        last_name =  graphene.String()

    def mutate(self, info, phone,first_name,last_name,user_id):
        user=CustomUser.objects.get(id=user_id)
        user_request=info.context.user

        if user != user_request:
           raise GraphQLError("Cant change the data of other users")
        user.phone=phone
        user.first_name=first_name
        user.last_name=last_name
        user.save()
        return UpdateUser(user=user)

class AddHouseToSaved(graphene.Mutation):
    user = graphene.Field(UserType)
    house = graphene.Field(HouseType)

    class Arguments:
        house_id = graphene.Int(required=True)

    def mutate(self,info, house_id):
        user=info.context.user

        if user.is_anonymous:
            raise GraphQLError("Log in to add a house to saved")

        house=House.objects.get(id=house_id)
        if not house:
            raise GraphQLError("House id is not valid")


        SavedHouses.objects.create(
                user=user,
                favourites=house
            )
        return AddHouseToSaved(user=user,house=house)

class DeleteHouseFromSaved(graphene.Mutation):
    saved_id = graphene.Int()

    class Arguments:
        saved_id = graphene.Int(required = True)
    
    def mutate(self, info ,saved_id):
        user=info.context.user

        if user.is_anonymous:
            raise GraphQLError("Log in to remove a house from saved")

        savedHouse=SavedHouses.objects.get(id=saved_id)

        if savedHouse.user!=user:
            raise GraphQLError("You are not allowed to delete another users saved data")

        savedHouse.delete()
        return DeleteHouseFromSaved(saved_id=saved_id)





class DeleteUser(graphene.Mutation):
    user_id = graphene.Int()

    class Arguments:
        user_id = graphene.Int(required=True)
       

    def mutate(self, info, user_id):
        idUser=user_id
        user=CustomUser.objects.get(id=user_id)
        user_request=info.context.user
       

        if user != user_request:
           raise GraphQLError("Cant delete the data of other users")
        user.delete()
        return DeleteUser(user_id=idUser)

class Mutation(graphene.ObjectType):
    create_user=CreateUser.Field()
    update_user=UpdateUser.Field()
    delete_user=DeleteUser.Field()
    save_house=AddHouseToSaved.Field()
    delete_saved_house=DeleteHouseFromSaved.Field()