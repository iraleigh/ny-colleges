const axios = require("axios");
const querystring = require('querystring');

const { backendHost, backendResource, backendParams, backendApiKey } = require("../config");

const url = backendHost + backendResource + backendParams + backendApiKey;

const get = async function () {
    try {
        const res = await axios.get(url);
        return res.data.results.map(function (result) {
            return {
                id: result.id,
                name: result["school.name"],
                state: result["school.state"],
                numStudents: result["latest.student.size"],
                admissionRate: result["latest.admissions.admission_rate.overall"]
            }
        })
    } catch (error) {
        return [];
    }
}

module.exports = {
    path: "/colleges",
    get: get
};