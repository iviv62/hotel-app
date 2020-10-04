# hotel-app


#Graphql queery
--
{
  allUsers{
    id
    username
    email
    password
    lastLogin
    isStaff
    isActive
    isSuperuser
    firstName
    dateJoined
  }
}

#Mutations
--
mutation {
  createUser(email: "test@abv.bg", password: "test", username: "ivo") {
    user {
      id
      email
      username
    }
  }
}

mutation TokenAuth($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
    refreshExpiresIn
  }
}