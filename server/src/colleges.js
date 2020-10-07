const axios = require("axios");

const { backendHost, backendResource, backendParams, backendApiKey, cacheExpirationMs } = require("../config");

const url = backendHost + backendResource + backendParams + backendApiKey;

const get = async function () {
    try {
        // Simple cache aside
        // NOTE: if the size of the data was bigger and/or the server distributed,
        // a standalone cache (like redis) would be useful
        let cache;

        if (!cache) {
            const res = await axios.get(url);
            cache = res.data.results.map(function (result) {
                return {
                    id: result.id,
                    name: result["school.name"],
                    state: result["school.state"],
                    numStudents: result["latest.student.size"],
                    admissionRate: result["latest.admissions.admission_rate.overall"]
                }
            });
            setTimeout(() => {
                cache = false;
            }, cacheExpirationMs || 60000)
        }

        return cache;
    } catch (error) {
        return [];
    }
}

module.exports = {
    path: "/colleges",
    get: get
};