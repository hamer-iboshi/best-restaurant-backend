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
                done();
            });
    });

});