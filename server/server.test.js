const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;


describe('Express', () => {
    
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(403)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'error',
                        name: 'To Do App'
                    })
                })
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return array of objects and good status', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body.length).toEqual(3);
                })
                .end(done);
        }); 
    });
}); 
