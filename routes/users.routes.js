'use strict';

const express = require('express');
const userController = require('../controllers/users.controller');
const router = express.Router();
const {getUsers, getOneUser, addUser, editUser, removeUser} = userController;

router.get('/users', getUsers);
router.get('/users/:id', getOneUser);
router.post('/users', addUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', removeUser);

module.exports = {
    routes: router
}