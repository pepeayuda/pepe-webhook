var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Pepe boot its working');
});

app.post('/hook', function(req, res){
    console.log(req.body);
    try {
        res.status(200).json({
            speech: req.body.fulfillment + 'desde el hook',
            displayText: req.body.fulfillment.speech + 'desde el hook',
            source: 'pepehook'
        });
    } catch (e) {
        console.log(e);
    }
});

app.listen(port, function () {
    console.log(`Pepe listening on port ${port}!`);
});
