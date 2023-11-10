const HTTP = require('http')

const jsonImported = require('./jsonPackage')

const data = JSON.stringify(jsonImported)

const server = HTTP.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('<h1>What is node js ?</h1> <p>Node js is a runtime environment of JavaScript that executes code.<p/> <p>Node js is a cross platform, open source server environment.</p>')
        res.write('<p>Benefits of node js :-</p> <ul><li>High Performance</li> <li>Cost Effecient</li></ul>')
        res.write('<p>To see routes of this side use <b>"/json"</b> and <b>/html</b></p>')
        res.end()
    }
    else if(req.url === '/json'){
        res.write(data)
        res.end()
    }
    else if(req.url === '/html'){
        res.write('<p> HTML Route </p>')
        res.end()
    }
    else{
        res.write('<p> No Routes Matched <p>')
        res.end()
    }
})

server.listen(5055, ()=>{
    console.log('Server is live')
})
