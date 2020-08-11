const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=79840514abad42a06484005fa9bd6808&%20query=40,-75';

const request = http.request(url, response => {
    let data ='';
    response.on('data', chunk => {
        data = data + chunk.toString();
    })

    response.on('end' ,() => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.end();