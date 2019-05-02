var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./users/controllers/users.controller');

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/uyatdb', function(err, db)  {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Create our Express router
var router = express.Router();


router.route('/users')
    .post(userController.postUsers)
    .get(userController.getUsers);
// Register all our routes with /api

app.use('/api', router);



// Start the server
app.listen(3000, function() {
  console.log('listening on 3000')
})
