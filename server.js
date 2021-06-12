const http = require('http')
const server = http.createServer((req, res) => {
  console.log('New Rental')
  res.end ('Sekoru')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Tracking') )
