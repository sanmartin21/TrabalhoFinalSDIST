const http = require('http');
const roundRobin = require('./roundRobin');
const serverConfig = require('./servers.json')

const servers = serverConfig.servers.map(server => ({ ...server }))
const server = http.createServer((req, res) => {
    roundRobin(servers, req, res)
})

server.listen(80, () => console.log('Servidor iniciado na porta 3000'))