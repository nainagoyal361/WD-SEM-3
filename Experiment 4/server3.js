const http = require('http');
const url = require('url');

const PORT = 2000;

const server = http.createServer((req,res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    console.log(`request received: $(req.emthod) ${path}`);

    if (path == '/' && req.method == 'GET'){
        res.statusCode = 200;

        res.setHeader('Content-Type', 'text/plain' );
        res.setHeader('X-Powered-By', 'plain-node-http');
        res.end('Hello world! Try /greet?name=Rahul or /headers or POST to /data\n');

    }
    else if (path === '/greet' && req.method === "GET"){
        const name = query.name || "Guest";
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(req.headers,null, 2));
    }
    else if (path === '/data' && req.method === "POST") {
        let body = '';
        req.on('data', chunk => {body += chunk;});
        req.on ('end', () => {
            res.statusCode = 201;
            res.setHeader('Content- Type', 'application/json');
            res.end(JSON.stringify({message: 'Data received succesfully', yourdata: body}));
        });

    }
    else if (path == "/error"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('simulated server error (500)\n');
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.end('404 - Page Not Found\n');
    }

});

server.listen(PORT, () => {
    console.log('server running at http://localhost:$(PORT)');
})