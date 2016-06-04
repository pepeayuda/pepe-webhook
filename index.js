var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var actions = require('./actions');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Pepe boot its working');
});

app.post('/', function(req, res){
    try {
        var action = req.body.result.action;

        if(action && actions[action]){
            actions[action]()
            .then(function(response){
                console.log(response);
                res.status(200).json(response);
            });
        }
        else{
            res.status(200).json({
                speech: '!!',
                displayText: '!!',
                source: '!!'
            });
        }


    } catch (e) {
        console.log(e);
        res.status(500).json({
            speech: 'Hubo un error con nuestros servicios',
            displayText: 'Hubo un error con nuestros servicios',
            source: 'webhook'
        });
    }
});

app.listen(port, function () {
    console.log(`Pepe listening on port ${port}!`);
});
