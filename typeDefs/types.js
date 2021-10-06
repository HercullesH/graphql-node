const { gql } = require("apollo-server");

const types = gql`
  type User {
    id: ID
    name: String
	userName: String
	password: String
  }
`;

module.exports = types;
