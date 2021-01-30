'use strict';

const userData = require('../data/users');

const getUsers = async (req, res, next) => {
    try {
        const users = await userData.getUsers();
        res.send(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getOneUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userData.getOneUser(id);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addUser = async(req, res, next) => {
    try {
        const data = req.body;
        const insert = await userData.insertUser(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const editUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const edit = await userData.updateUser(id, data);
        res.send(edit);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const removeUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const remove = await userData.deleteUser(id);
        res.send(remove);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getUsers,
    getOneUser,
    addUser,
    editUser,
    removeUser
}