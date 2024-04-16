let express = require("express");
let app = express();
let socket = require("socket.io");

app.set('views', __dirname + '/views' );
app.set('view engine', 'pug' );
app.use('/js', express.static('js'));

let io = socket.listen(app.listen(8080));

app.get('/', (req,res) => {
    res.render('index');
});
io.sockets.on('connection', client => {
  console.log('выполнено подключение к чату...');
  client.on('message', data => {
    console.log(data);      
    //client.broadcast.emit('message', data); //отправка другим
    io.sockets.emit('message', data);
  })

 client.emit('message', {login: 'Чат', text:'старт!'});
})