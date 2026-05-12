const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
    }
    else if (req.url === '/about') {
        fs.readFile('about.html',(err,data)=>{
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            res.write(data)
            res.end()
        })
    }
    else if (req.url === '/contact') {
        res.write('This is Contact Page')
    }
    else {
        res.write('Page Not Found')

    }

})
server.listen(3000, () => {
    console.log('Server is running on port 3000');
})