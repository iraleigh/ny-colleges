const shutdownEvent = require("death");

const server = require("./src/server");
const { intervalId } = require("./src/colleges");

shutdownEvent(function () {
    console.log('\nSIGTERM signal received: closing HTTP server')
    server.close(function () {
        console.log('HTTP server closed')
    })
})