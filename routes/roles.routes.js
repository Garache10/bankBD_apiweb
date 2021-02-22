'use strict';

const express = require('express');
const roleController = require('../controllers/role.controller');
const router = express.Router();
const { getRoles } = roleController;

router.get('/roles', getRoles);

module.exports = {
    routes: router
};