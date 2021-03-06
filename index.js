let express = require('express')
let layouts = require('express-ejs-layouts')
let fs = require('fs')

let methodOverride = require('method-override')

let app = express();

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(layouts)

app.use(express.urlencoded({extended: false}))

app.use(methodOverride('_method'))

//reference to the routes that moved into controller folder
app.use('/cats', require('./controllers/cats'))
app.use('/dogs', require('./controllers/dogs'))

//homepage route for both cats & dogs
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000)