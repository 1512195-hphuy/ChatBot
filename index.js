// Import the Dialogflow service function
const {dialogflow} = require('actions-on-google');

// Import the service function and various response classes
const {
 dialogflow,
 Image,
 Table,
 Carousel,
} = require('actions-on-google');

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });

const app = express();
const dialogFlow = dialogflow();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen((process.env.PORT || 5000));

const verifyWebhook = require('./src/verify-webhook');
const messageWebhook = require('./src/message-webhook');

app.get('/', verifyWebhook);
app.post('/', messageWebhook);