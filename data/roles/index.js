'use strict';

const utils = require('../utils');
const config = require('../../src/config');
const sql = require('mssql');

const getRoles = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const RolesList = await pool.request().query(sqlQueries.roleslist);
        return RolesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getRoles
};
