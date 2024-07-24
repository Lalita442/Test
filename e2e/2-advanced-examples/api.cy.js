describe('GET API Request', () => {
  it('should fetch data', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });
});
describe('POST API Request', () => {
  it('should create a new post', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
    .then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('title', 'foo');
      expect(response.body).to.have.property('body', 'bar');
      expect(response.body).to.have.property('userId', 1);
    });
  });
});
describe('PUT API Request', () => {
  it('should update an existing post', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('title', 'foo');
      expect(response.body).to.have.property('body', 'bar');
      expect(response.body).to.have.property('userId', 1);
    });
  });
});
describe('DELETE API Request', () => {
  it('should delete an existing post', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});
