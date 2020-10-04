const assert = require("assert");
const nock = require("nock");

const colleges = require("../src/colleges");
const { backendHost, backendResource, backendParams, backendApiKey } = require("../config");
const validData = require("./data/colleges.valid.json")
 

describe("Given there are colleges in NY", function() {
    it("Then there should be a path for the server to use", function() {
        assert.strictEqual(colleges.path, "/colleges");
    });

    it("Then there should be a function for the server to use to fetch them", function() {
        assert.ok(colleges.get());
    });

    describe("When the backend API is available", function() {
        beforeEach(function() {
            nock(backendHost).get(backendResource + backendParams + backendApiKey).reply(200, validData);
        });
        
        it("Then it should call the backend API", function(done) {
            colleges.get().then(function(res) {
                assert.ok(res)
            }).finally(function() {
                done();
            });   
        });

        it("Then it should convert the response into correct data format", function(done) {
            colleges.get().then(function(res) {
                assert.strictEqual(res.length, 20);
                res.map(function(result) {
                    assert.ok(result.id)
                    assert.ok(result.name)
                    assert.ok(result.state)
                    assert.ok(result.numStudents)
                    assert.ok(result.admissionRate)
                })
            }).finally(function() {
                done();
            });   
        });
    });

    describe("When the backend API is not available", function() {
        beforeEach(function() {
            nock(backendHost).get(backendResource + backendParams + backendApiKey).reply(500);
        });
        
        it("Then it should call the backend API", function(done) {
            colleges.get().then(function(res) {
                assert.ok(res)
            }).finally(function() {
                done();
            });   
        });

        it("Then it should return an empty set of results", function(done) {
            colleges.get().then(function(res) {
                assert.strictEqual(res.length, 0);
            }).finally(function() {
                done();
            });   
        });
    });
});