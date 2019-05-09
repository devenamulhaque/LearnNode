const express = require('express')
const path = require('path')
const Posts = require('./routes/api/posts')
const app = express()
const hbs = require('express-handlebars')

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Layout engine
app.engine('.hbs', hbs({ extname: '.hbs', defaultLayout: 'main' }))
app.set('view engine', '.hbs')

// Members
app.use('/api/posts', Posts)

// Port
app.listen('3000', () => console.log('started'))

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Enamul Haque',
    })
})
