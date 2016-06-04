var rp = require('request-promise');
var url = 'https://pepe-ayuda.herokuapp.com/api';

module.exports = {
    'news.get': function(){
        return rp(`${url}/pepe_news`)
        .then(function(response){

            response = JSON.parse(response);

            var data = response[Math.floor(Math.random()*response.length)];

            data.shortContent = data['short-content'];

            var text = `${data.shortContent}\n${data.url}`;

            return {
                speech: text,
                displayText: text,
                source: 'api.news'
            };
        });
    },
    'service.find': function(data){

      return rp(`${url}/services?filter[include]=servicesType`)
      .then(function (response) {

        response = JSON.parse(response);


      });
    },
    'service.create': function(data){
      console.log(data);
    }
};
