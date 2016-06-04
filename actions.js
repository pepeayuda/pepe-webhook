var rp = require('request-promise');
var url = 'https://pepe-ayuda.herokuapp.com/api';

module.exports = {
    'news.get': function(){
        console.log('Llegamos a las actions!');
        return rp(`${url}/pepe_news`)
        .then(function(response){

            var data = response[Math.floor(Math.random()*response.length)];

            console.log('/////');
            console.log(data);
            console.log('/////');

            return {
                speech: data.title,
                displayText: data.title,
                source: 'api.news'
            };
        })
        .catch(function(error){
            console.log(error);
        });
    }
};
