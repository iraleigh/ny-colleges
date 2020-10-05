const server = require("./src/server");
const shutdownEvent = require("death");

shutdownEvent(function () {
    console.log('\nSIGTERM signal received: closing HTTP server')
    server.close(function () {
        console.log('HTTP server closed')
    })
})