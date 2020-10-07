module.exports = {
    backendHost: "https://api.data.gov",
    backendResource: "/ed/collegescorecard/v1/schools",
    backendParams: "?school.state=NY&latest.academics.program.bachelors.education=1&_fields=id,school.state,school.name,latest.admissions.admission_rate.overall,latest.student.size&page=0&api_key=",
    backendApiKey: "",
    cacheExpirationMs: 10000
}