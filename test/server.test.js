const request = require('supertest');
const app = require('../server/index');

describe('Proxy Server', () => {
  let putId;

  test('server responds to successful GET requests with 200', (done) => {
    request(app)
      .get('/restaurants/123/reviews')
      .then((res) => {
        putId = res.body[0]['_id']; // eslint-disable-line
        if (res.statusCode !== 200) {
          done(new Error('Status code not 200!'));
        }
        done();
      });
  });

  const checkRes = (res) => {
    if (!Array.isArray(res.body)) {
      done(new Error('Data is not an array!'));
    }
  };

  test('server responds with data from reviews component', (done) => {
    request(app)
      .get('/restaurants/123/reviews')
      .expect(200)
      .expect(checkRes)
      .end(err => (
        err ? done(err) : done()
      ));
  });

  test('server responds with data from photos component', (done) => {
    request(app)
      .get('/pictures/123')
      .expect(200)
      .expect(checkRes)
      .end(err => (
        err ? done(err) : done()
      ));
  });

  test('server responds with data from title component', (done) => {
    request(app)
      .get('/title/123')
      .expect(200)
      .expect(checkRes)
      .end(err => (
        err ? done(err) : done()
      ));
  });

  test('server responds with data from map component', (done) => {
    request(app)
      .get('/map/123')
      .expect(200)
      .expect(checkRes)
      .end(err => (
        err ? done(err) : done()
      ));
  });

  test('server handles put requests to review component', (done) => {
    request(app)
      .put(`/restaurants/123/reviews/${putId}`)
      .send({ cool: 9 })
      .set('contentType', 'application/json')
      .expect(200)
      .end(done);
  });

  test('server handles post requests to title component', (done) => {
    request(app)
      .post('/')
      .send({ type: 'Chinese', id: '123' })
      .set('contentType', 'application/json')
      .expect(201)
      .end(done);
  });
});

