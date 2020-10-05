const assert = require("assert");
const nock = require("nock");
const request = require("supertest");

const server = require("../src/server")
const colleges = require("../src/colleges");
const { backendHost, backendResource, backendParams, backendApiKey } = require("../config");
const validData = require("./data/colleges.valid.json")


describe("Given the application is started", function () {
    describe("When GET /colleges is called", function () {
        beforeEach(function () {
            nock(backendHost).get(backendResource + backendParams + backendApiKey).reply(200, validData);
        });

        it("Then it returns a status of 200 and valid data", function (done) {
            request(server)
                .get(colleges.path)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200).end(function (err, res) {
                    assert.strictEqual(res.body.length, 20);
                    done();
                });
        })

        afterEach(function (done) {
            server.close(done)
        })
    });
});