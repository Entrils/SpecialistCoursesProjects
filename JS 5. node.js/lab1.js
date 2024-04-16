const http = require('http');
const fs = require('fs');

let app = http.createServer( (request, response) => {
  let status = 200, index = 'index.html'

  if(request.url === '/download'){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.setHeader('Content-Disposition', 'attachment; filename="foo.html"');
    response.end('<h1>То, что скачали</h1>');  
    return;
  }  

  fs.stat(index, (err, stats) => {
    try{  
       if( err ) throw err;
       fs.readFile(index, (err, data) => {
         if( err ) throw err;
         response.statusCode = status;
         response.setHeader('Content-Type', 'text/html; charset=UTF-8');
         response.end(data);
       });
    }catch(e){
       status = 404;     
       response.statusCode = status; 
       response.setHeader('Content-Type', 'text/html; charset=UTF-8');
       response.write('Файл не найден'); 
       response.end();
    }
    // response.end();
  })

})

app.listen(8001);
console.log('Listening...');