'use strict';

const utils = require('../utils');
const config = require('../../src/config');
const sql = require('mssql');

const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const usersList = await pool.request().query(sqlQueries.userslist);
        return usersList.recordset;
    } catch (error) {
        console.log(error.message);
    }
};

const getOneUser = async (userId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const oneUser = await pool.request().input('Id', sql.Int, userId).query(sqlQueries.userbyid);
        return oneUser.recordset;
    } catch (error) {
        console.log(error.message);
    }
};

const insertUser = async (user) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insert = await pool.request()
            .input('name', sql.NVarChar(sql.MAX), user.name)
            .input('username', sql.NVarChar(30), user.username)
            .input('password', sql.NVarChar(50), user.password)
            .input('email', sql.NVarChar(50), user.email)
            .input('phone_number', sql.NVarChar(8), user.phone_number)
            .query(sqlQueries.createuser);
        return insert.recordset;
    } catch (error) {
        console.log(error.message);
    }
};

const updateUser = async (id, user) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const update = await pool.request()
            .input('Id', sql.Int, id)
            .input('name', sql.NVarChar(sql.MAX), user.name)
            .input('username', sql.NVarChar(30), user.username)
            .input('password', sql.NVarChar(50), user.password)
            .input('email', sql.NVarChar(50), user.email)
            .input('phone_number', sql.NVarChar(8), user.phone_number)
            .query(sqlQueries.updateuser);
        return update.recordset;
    } catch (error) {
        console.log(error.message);
    }
};

const deleteUser = async (id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const deleted = await pool.request().input('Id', sql.Int, id).query(sqlQueries.deleteuser);
        return deleted.recordset;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser
}