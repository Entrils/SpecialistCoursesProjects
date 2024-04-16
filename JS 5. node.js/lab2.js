//09-lab.js
const http = require('http');
const EventEmitter = require('events');

let app = http.createServer().listen(8000);

const myEmitter = new EventEmitter();
myEmitter.on('log', message => {
   console.log(message); 
})

app.on('request', (request, response) => {
  let url = new URL(request.url, 'http://localhost');

  let S = url.searchParams.get('S');
  let p = url.searchParams.get('p');
  let n = url.searchParams.get('n');
  
  p /= 1200;
  n *= 12;

  const A = S * p / (1 - (1 + p) ** (-n)); 
  response.statusCode = 200;
  response.writeHead(200 , {
      'Content-Type': 'text/html; charset=UTF-8'
  });
  if(S && p && n){
    const str = 'Платёж:' + A.toFixed(2) + 'руб.\n';
    myEmitter.emit('log', str);  
    response.end(str);
  } else {
    response.end('Не все данные указаны');  
  }
}); 

  



