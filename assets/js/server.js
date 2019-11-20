const express = require("express");
const path = require("path");
const fs = require('fs')
const reservations = require('../storage/reservations.json')
const waitlist = require('../storage/waitlist.json')

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../../make.html"));
})

app.get('/api/tables', (req, res) => {
    res.json(reservations)
});

app.get('/api/waiting', (req, res) => {
    res.json(waitlist)
});

app.post('/reserve', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});