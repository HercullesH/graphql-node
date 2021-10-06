const { gql } = require("apollo-server");

const mutation = gql`
  type Mutation {
    CreateUser(user: UserInput): User
    updateUser(id: String, user: UserInput): User
    deleteUser(id: String): User
  }

  input UserInput {
    name: String
	userName: String
	password: String
  }
`;

module.exports = mutation;
