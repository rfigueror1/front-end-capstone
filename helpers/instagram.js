var express = require('express')
var app = express()
var api = require('instagram-node').instagram();
api.use({
    client_id: '55b167a2062e4a4787a69d2622e7748e',
  client_secret: 'e4c097124b0d4e1d97bc5f709ec969f3'
});

var redirect_uri = process.env.INSTANGRAM_BASE_URL + '/handleauth';

// A middleware for log
app.use(function(req, res, next){
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Url: ' + fullUrl, 'debug');
    console.log('Params: ' + JSON.stringify(req.params), 'debug');
    console.log('Query: ' + JSON.stringify(req.query), 'debug');
    next();
})

//https://www.instagram.com/oauth/authorize?client_id=55b167a2062e4a4787a69d2622e7748e&redirect_uri=http://localhost:3000/handleauth&response_type=code

app.get('/', function(req, res){
    res.send('Server is working well ...');
})

// This is where you would initially send users to authorize
app.get('/authorize_user', function(req, res) {
  res.redirect(
      api.get_authorization_url(redirect_uri, {
                                                    scope: ['likes'],
                                                    state: 'a state'
                                                })
    );
});

// This is your redirect URI
app.get('/handleauth', function(req, res) {
  api.authorize_user(req.query.code, redirect_uri, function(err,result) {
    if (err) {
      console.log(err.body);
      console.log(result);
      res.send("Didn't work");
    } else {
      console.log('Yay! Access token is ' + result.access_token);
      res.send('You made it!!');
    }
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
