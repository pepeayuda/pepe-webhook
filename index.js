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
    console.log(req.body.action);

    try {
        res.status(200).json({
            speech: `${req.body.result.fulfillment.speech} !!`,
            displayText: `${req.body.result.fulfillment.speech} !!`,
            source: 'pepehook'
        });
    } catch (e) {
        console.log(e);
    }
});

app.listen(port, function () {
    console.log(`Pepe listening on port ${port}!`);
});
