const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const server = require('../index');
// module.exports = app.listen(3001);

// test login
describe('/authentication check', () => {
    describe('/POST login', () => {
        it('it should authenticate user details and return login json response', (done) => {
            let data = {
                email: "Joshua@gmail.com",
                password: "12345",
            }
            chai.request(server)
                .post('/auth/signin')
                .set('Accept', 'application/json')
                .set('Content-Type', 'application/json')
                .send(data)
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    (res.body.status).should.be.a('boolean');
                    res.body.data.should.have.property('token');
                    done();
                })
        })
    });

    describe('/POST signup', () => {
        it('it should register a new user', (done) => {
            let data = {
                firstName: "Joshua",
                lastName: "Uzor",
                email: "Joshuatest@gmail.com",
                address: "9 Olubisi close Lagos",
                phone: "08160905978",
                interests: [{
                    "id": 1,
                    "interest": "Chelsea"
                }],
                userType: "user",
                password: "12345"
            };
            chai.request(server)
                .post('/auth/signup')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.status.should.be.a('boolean').eql(true);
                    res.body.should.have.property('status');
                    res.body.should.have.property('data').eql('User created successfully');
                    done();
                });
        })
    });
})