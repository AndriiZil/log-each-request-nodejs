const http = require('http')
const {log} = require('./bunyanLogger')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {

    log.info({formattedRequest: req, formattedResponse: res},'logged successfully')

    const path = req.url

    switch(path) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Welcome to my Home')
            break
        case '/coffee':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('I need coffee too...')
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Not Found')
            break
    } })

server.listen(port, () => console.log(`node server started on port ${port} 🚀 `))
