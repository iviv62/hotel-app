import {gql} from '@apollo/client';

export const ALL_HOUSES = gql`
  {
    allHouses {
      id
      title
      description
      floors
      builtOn
      area
      bedrooms
      bathrooms
      price
      address
      location
      city
      createdOn
      postedBy {
        id
        firstName
        lastName
        phone
        email
      }
      otherImages {
        id
        image
      }
      savedhousesSet{
        user{
          id
        }
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      user {
        id
        email
        username
      }
    }
  }
`;

export const SAVED_HOUSES_OF_USER = gql`
{
  savedHousesOfUser{
    id
    house{
      id
      title
      description
      floors
      builtOn
      area
      bedrooms
      bathrooms
      price
      address
      location
      city
      createdOn
      postedBy{
        firstName
        lastName
        email
        phone
      }
      otherImages{
        id
        image
      }
      
    }
  }
}
`;

export const SAVE_HOUSE = gql`
mutation saveHouse($houseId: Int!) {
  saveHouse(houseId: $houseId) {
    savedHouse {
      id
      user {
        id
      }
      house {
        id
        title
        description
        floors
        builtOn
        area
        bedrooms
        bathrooms
        price
        address
        location
        city
        createdOn
        postedBy {
          firstName
          lastName
          email
          phone
        }
        otherImages {
          id
          image
        }
      }
    }
  }
}
`;

export const DELETE_SAVED_HOUSE = gql`
mutation deleteSavedHouse($houseId: Int!) {
  deleteSavedHouse(houseId: $houseId) {
   savedId
  }
}
`;

export const TOKEN_AUTHENTICATION = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(input: {username: $username, password: $password}) {
      token
      payload
      refreshExpiresIn
      user {
        id
        email
        firstName
        lastName
        username
      }
    }
  }
`;

export const GET_LOGGED_USER = gql`
  {
    user @client
  }
`;
