const UsersModel = require('../models/usersModel');

const UsersController = {
  createUser: async (req, res) => {
    try {
      const userId = await UsersModel.createUser(req.body);
      res.status(201).json({ id: userId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await UsersModel.getUserById(req.params.id);
      user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await UsersModel.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await UsersModel.updateUser(req.params.id, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await UsersModel.deleteUser(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = UsersController;
