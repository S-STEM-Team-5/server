require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const fetch = require("node-fetch");

//Creating DB connection and logging
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.connection.on('error', (err) => console.log(err));
mongoose.connection.on('open', () => console.log('Connected to Database'));


//Middleware
app.use(cors());
app.use(express.json());

//Routes
const accountsRoute = require('./routes/account');
const guardianRoute = require('./routes/guardian');
const camperRoute = require('./routes/camper');
const volunteerRoute = require('./routes/volunteer');

app.use('/rest/account', accountsRoute);
app.use('/rest/guardian', guardianRoute);
app.use('/rest/camper', camperRoute);
app.use('/rest/volunteer', volunteerRoute);

//Creating server on port 3000.
app.listen(3013, () => console.log('Server Started'));
getIPFromAmazon();


async function getIPFromAmazon() {
  await fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => console.log('Server listening at: ' + data))
}
