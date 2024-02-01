const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index'); // Update the path accordingly
const expect = chai.expect;

chai.use(chaiHttp);

describe('Orders API', () => {
  it('should get orders with default limit and offset', (done) => {
    chai.request(app)
      .get('/api/orders')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.be.true;
        expect(res.body.data).to.be.an('array');
        done();
      });
  });

  it('should get orders with custom limit and offset', (done) => {
    chai.request(app)
      .get('/api/orders?limit=5&offset=2')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.be.true;
        expect(res.body.data).to.be.an('array');
        done();
      });
  });



  after(() => {
    // Add any cleanup or teardown logic here
  });
});
