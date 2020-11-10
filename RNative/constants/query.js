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

export const SAVE_HOUSE = gql`
mutation saveHouse($houseId:Int!){
	saveHouse(houseId:$houseId){
    user{
      id
      username
      email
    }
    house{
      id
      title
      price
      address
      bathrooms
      bedrooms
    }
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
