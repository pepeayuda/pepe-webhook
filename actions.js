var rp = require('request-promise');
var url = 'https://pepe-ayuda.herokuapp.com/api';

module.exports = {
    'news.get': function(){
        return rp(`${url}/pepe_news`)
        .then(function(response){

            response = JSON.parse(response);

            var data = response[Math.floor(Math.random()*response.length)];

            data.shortContent = data['short-content'];

            var text = `${data.title}\n ${data.shortContent}\n ${data.url}`;

            return {
                speech: text,
                displayText: text,
                source: 'api.news'
            };
        });
    }
};
