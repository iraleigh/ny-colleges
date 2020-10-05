const express = require('express');
const colleges = require("./colleges")

const app = express();
const port = process.env.PORT || 5000;

app.get(colleges.path, (req, res) => {
    colleges.get().then(function (results) {
        res.json(results);
    });
});

module.exports = app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});


