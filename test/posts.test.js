const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const server = require('../index');

describe('/posts test', () => {
    describe('/POST create post', () => {
        it('it should create a post', (done) => {
            let data = {
                post: "trust in God"
            };
            chai.request(server)
                .post('/post/create')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJ1dWlkIjoiNmY1YjM4MjctNzQzNi00MjFiLWJhMGYtZjE0Njc4YWM5OGNmIiwiZW1haWwiOiJKb3NodWFAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9zaHVhIiwibGFzdE5hbWUiOiJVem9yIiwiYWRkcmVzcyI6IjkgT2x1YmlzaSBjbG9zZSBMYWdvcyIsImludGVyZXN0cyI6Ilt7XCJpZFwiOjEsXCJpbnRlcmVzdFwiOlwiQ2hlbHNlYVwifV0iLCJ1c2VyVHlwZSI6InVzZXIiLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTIwVDE0OjM2OjE1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTIwVDE0OjM2OjE1LjAwMFoifSwiaWF0IjoxNjQ3ODMyNDkyfQ.EUzQSMJ0JFaoXV7LvJEXnfqeVSmaBkqrg3KxptEFZIY')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.status.should.be.a('boolean').eql(true);
                    res.body.should.have.property('status');
                    res.body.should.have.property('data').eql('Post created');
                    done();
                })
        });
    });

    describe('/GET get posts', () => {
        it('it should get all posts', (done) => {
            chai.request(server)
                .get('/post/getall')
                .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJ1dWlkIjoiNmY1YjM4MjctNzQzNi00MjFiLWJhMGYtZjE0Njc4YWM5OGNmIiwiZW1haWwiOiJKb3NodWFAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiSm9zaHVhIiwibGFzdE5hbWUiOiJVem9yIiwiYWRkcmVzcyI6IjkgT2x1YmlzaSBjbG9zZSBMYWdvcyIsImludGVyZXN0cyI6Ilt7XCJpZFwiOjEsXCJpbnRlcmVzdFwiOlwiQ2hlbHNlYVwifV0iLCJ1c2VyVHlwZSI6InVzZXIiLCJjcmVhdGVkQXQiOiIyMDIyLTAzLTIwVDE0OjM2OjE1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTAzLTIwVDE0OjM2OjE1LjAwMFoifSwiaWF0IjoxNjQ3ODMyNDkyfQ.EUzQSMJ0JFaoXV7LvJEXnfqeVSmaBkqrg3KxptEFZIY')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql(true);
                    res.body.should.have.property('data');
                    res.body.data.should.be.an('object');
                    res.body.data.rows.should.be.an('array');
                    done();
                })
        })
    })
})