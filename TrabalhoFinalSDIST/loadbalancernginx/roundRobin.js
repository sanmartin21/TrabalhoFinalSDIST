const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

let current = 0;
let servers = [];

function loadServers() {
    fetch('/servers.json')
        .then(response => response.json())
        .then(data => {
            servers = data.servers;
            start();
        })
        .catch(error => {
            console.error('Erro ao carregar os servidores:', error);
        });
}

function start() {
    if (servers.length > 0) {
        const target = servers[current];
        proxy.web(req, res, { target: `http://${target.host}:${target.port}` });

        setTimeout(() => {
            current = (current + 1) % servers.length;
            start();
        }, 1000);
    }
}

loadServers();

module.exports = roundRobin;
