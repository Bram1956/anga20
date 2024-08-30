// require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(__dirname))
// app.use(express.static(path.join(__dirname, 'public')))
// app.get('/', function (req, res) {
//     res.sendFile('map.html')
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'map.html'));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})