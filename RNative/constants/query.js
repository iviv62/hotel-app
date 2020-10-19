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
