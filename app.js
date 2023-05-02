const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path')

app.use(cors())
// app.use(cors({ origin: 'https://localhost' }))

app.use(express.static(path.join(__dirname, '/frontend/dist')))


app.get('/names', (req, res) => {
  res.send('Derek Chan')
})

app.get('/api/', (req, res) => {
  res.json({ msg: 'Home', status: 200 })
})

app.get('/api//hello', (req, res) => {
  res.json({ msg: 'Hello', status: 200 })
})

app.get('/api/dashboard', (req, res) => {
  res.json({ msg: 'dashboard', status: 200 })
})


app.listen(5000, () => console.log('Server is running on port 5000'))