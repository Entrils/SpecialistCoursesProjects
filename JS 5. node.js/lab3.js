
const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const json_xml = require('json_xml')

const app = express();

app.set("views", __dirname + '/views');
app.set('view engine','pug');


app.get('/:currency', (req, res) => {

  let currency = req.params.currency;  

  let date = new Date().toLocaleDateString().replace(/\./g, '/');

  let url = `http://www.cbr.ru/scripts/XML_daily.asp?date_req=${date}`

  fetch(url)
    .then(res => res.text())
    .then(body => {
        
        let jsonObj = json_xml.xml2json(body)
        let {ValCurs} = jsonObj
        let {Valute} = ValCurs;

        let result = '';
        for(let p in Valute){
           if(Valute[p]['CharCode'].toLowerCase() === currency.toLowerCase()) {
             result = Valute[p]['Value'];
             break;
           }
        }

        console.log(result)
        res.render('form-currency', {currency, result});
        res.end();
    });

});

app.get('/api', (req, res) => {
    res.json({name: 'John'});
});

app.get('/specialist', (req, res) => {
 
    fetch('http://localhost:8000/course', {
        method: 'post',
        body: JSON.stringify({qwerty:123}),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.text())
    .then(body => {
        console.log(body)
        res.send(body)
    });

});

app.listen(8000);
