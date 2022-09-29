const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');
const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
// const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
// chai.use(chaiHttp);

const { mock } = require('./mocks/product.model.mock');

describe('Testa a camada de model referente a rota products', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mock.products);
  });
  afterEach(function () {
    sinon.restore();
  });
  it('Resposta da rota GET /products', async function () {
    const response = await chai.
      request(app).
      get('/product');
    expect(response.body.product).to.deep.equal(mock.products);
    expect(response.status).to.be.equals(200);
  });
  it('Resposta da rota GET /products/1', async function () {
    const response = await chai.
      request(app).
      get('/product/1');
    expect(response.body.product).to.deep.equal(mock
      .products.filter((product) => product.id === 1));
    expect(response.status).to.be.equals(200);
  })
})