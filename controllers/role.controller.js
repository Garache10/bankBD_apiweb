'use strict';

const roleData = require('../data/roles');

const getRoles = async (req, res, next) => {
    try {
        const roles = await roleData.getRoles();
        res.send(roles);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getRoles
};