const request = require('supertest');
const App = require('./app')

const { app, error } = App;

describe('Test the request', () => {
    test('It should response the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
    test('It should response to wrong route', () => {
        //const errorMessage = 'Please check your route'
        return request(app).get("/anyotherroute").then(response => {
            expect(response.text).toBe(error)
        })
    });
})