'use strict';

const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRoutes = require('../routes/users.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(morgan('tiny'));
app.use('/api', userRoutes.routes);

app.listen(config.port, () => console.log('Server is running on port ' + config.port));