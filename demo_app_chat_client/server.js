var express = require('express')
var app = express()

app.use(express.static(__dirname))

var messages = [
    { name: 'Tejashree', message: 'Hi' },
    { name: 'Malini', message: 'Hello' }
]

app.get('/messages', (req, res) => {
    res.send(messages)
})
var server = app.listen(3000, () => {
    console.log('Server is running on port', server.address().port)
})