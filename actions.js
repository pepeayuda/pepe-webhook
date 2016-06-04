var rp = require('request-promise');
var url = 'https://pepe-ayuda.herokuapp.com/api';

module.exports = {
    'news.get': function(){
        return rp(`${url}/pepe_news`).then(function(response){

            return {
                speech: response.title,
                displayText: response.title,
                source: 'api.news'
            };
        });
    }
};
