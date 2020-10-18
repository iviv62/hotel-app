import { gql } from '@apollo/client';

export const ALL_HOUSES = gql`
{
    allHouses{
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
      img
      createdOn
      postedBy{
        id
        firstName
        lastName
        phone
        email
      }
      otherImages{
        id
        image
        
      }
      
    }
  }
`;