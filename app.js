const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path')

app.use(cors())
// app.use(cors({ origin: 'https://localhost' }))

app.use(express.static(path.join(__dirname, '/frontend/dist')))


app.get('/names', (req, res) => {
  res.send('Derek')
})

app.listen(5000, () => console.log('Server is running on port 5000'))