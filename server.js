const express = require("express");
const path = require("path");
const fs = require('fs')
const reservations = require('./public/assets/storage/reservations.json')
const waitlist = require('./public/assets/storage/waitlist.json')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/make.html"));
});

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/view.html"));
 });

app.get('/api/tables', (req, res) => {
    res.json(reservations)
});

app.get('/api/waiting', (req, res) => {
    res.json(waitlist)
});

app.post('/api/tables', (req, res) => {
    console.log('in post route')
    const newTable = req.body;

    let list;
    console.log(newTable)
    
    if(reservations.length >= 8) {
        listKey = 'waitlist';
        list = waitlist;
        waitlist.push(newTable)
    } else {

        listKey = 'reservations';
        list = reservations;
        reservations.push(newTable)
        
    }
    res.json(req.body)
    
        fs.writeFile(`/public/assets/storage/${listKey}.json`, JSON.stringify(list), function(err) {
            
            if(err) throw err;

            console.log("Table logged")
        });
    
    
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});