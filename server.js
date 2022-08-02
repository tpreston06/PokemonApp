const express = require('express');
const pokemon = require('./models/pokemon');
const app = express();
const port = 3000;

//setting up our views
app.set('view engine', 'jsx') //setting up our HTML template
app.engine('jsx', require('express-react-views').createEngine()) //Initializing our view engine

//route
app.get('/', (req, res) => {
    res.send('Welcome to Pokemon App!');
});
app.get('/pokemon', (req, res) =>{
    //res.send(pokemon);
    res.render('Index', {pokemon: pokemon});
});






// Tell the app to listen on port 3000
app.listen(port, function() {
    console.log('Listening on port', port);
   });