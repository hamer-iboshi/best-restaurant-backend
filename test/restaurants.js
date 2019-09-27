const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server');

const should = chai.should();
const assert = chai.assert;

chai.use(chaiHttp);

describe('Restaurants', () => {
    
    it('should get all categories', (done) => {
        chai.request(server)
            .get('/categories')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('categories');
                done();
            });
    });

    it('should get best restaurants for new york city', (done) => {
        chai.request(server)
            .get('/best_near?place=New York City')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.should.be.a('object');
                res.body.should.have.property('location');
                res.body.should.have.property('popularity');
                res.body.should.have.property('link');
                res.body.should.have.property('nearby_restaurants');
                done();
            });
    });

});