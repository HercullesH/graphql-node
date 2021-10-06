const db = require("../models/index");

const userResolver = {
  Query: {
    async users() {
      return await db.User.findAll();
    },
    async user(_, { id }) {
      return await db.User.findByPk(id);
    },
  },
  Mutation: {
    async CreateUser(_, { user }) {
      const newUser = await db.User.create(user);
      return newUser;
    },
    async updateUser(_, { id, user }) {
      return await db.User.update(user, {
        where: { id: id},
      });
    },
    async deleteUser(_, { id }) {
      return await db.User.destroy({
        where: { id: id },
      });
    },
  },
};

module.exports = userResolver;
