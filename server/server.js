const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(403).send({
        error:'error',
        name: 'To Do App'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Guy',
            age: 30
        },
        {
            name: 'D',
            age: 10
        },
        {
            name: 'Edd',
            age: 23
        },
    ]);
});

app.listen(3000);

module.exports.app = app;