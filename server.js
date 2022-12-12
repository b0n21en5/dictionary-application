const express = require('express')
var axios = require("axios")
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.sendFile("index.html",{root: __dirname});
})

app.get('/SearchWord', (req, res) => {
  // res.send('Hello')
  console.log(req.query)

  var options = {
    method: 'GET',
    url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
    params: {word: req.query.word},
    headers: {
        'X-RapidAPI-Key': '1b833ec468mshb55c1fb80c72afbp1dc25ejsncd2a60ae0551',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
    console.log(response.data);
    res.json(response.data)
    }).catch(function (error) {
    console.error(error);
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000`)
})