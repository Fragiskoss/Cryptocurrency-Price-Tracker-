const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
const MongoDB = require("./db.js");

app.use(cors());

app.get('/:crypto', (req, res) => {
  const crypto = req.params.crypto
  // URL BRINGS BACK ALL INFO OF THE TOKEN 
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=${crypto}`
  // URL2 BRINGS BACK THE CURRENT QUOTE AND PRICE DATA
  const url2 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${crypto}`

  request.get({
    url: url2,
    json: true,
    headers: {
      'X-CMC_PRO_API_KEY': YOUR_API_KEY
    }
  }, (error, response, data) => {

    if (error) {
      return res.send({
        error: error
      });
    }

    res.send({
      data: data
    });

  });

});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});