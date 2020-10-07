const express = require('express');
const colleges = require("./colleges")
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;



app.get(colleges.path, (req, res) => {
    colleges.get().then(function (results) {
        res.json(results);
    });
});

if (process.env.PROD) {
    app.use(express.static(path.join(__dirname, '../../client/build')));
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
    });
}

module.exports = app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});