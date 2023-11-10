const HTTP = require('http')

const jsonImported = require('./jsonPackage')

const data = JSON.stringify(jsonImported)

const server = HTTP.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('<p>Slash Route</p>')
        res.end()
    }
    else if(req.url === '/json'){
        res.write(data)
        res.end()
    }
    else if(req.url === '/html'){
        res.write('<p>HTML Route</p>')
        res.end()
    }
    else{
        res.write('<p>No Routes Matched<p>')
        res.end()
    }
})

server.listen(5055, ()=>{
    console.log('Server is live')
})
