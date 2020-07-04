import axios from 'axios';

const url = process.env.URL;

describe('hello-world', () => {
  beforeAll((done) => {
    done();
  });

  test('should reply success with message', async () => {
    const res = await axios.get(`${url}/hello-world`);
    expect(res.status).toEqual(200);
    expect(res.data.message).toMatch(/Hello World! Go Serverless/);
  })
  
});
