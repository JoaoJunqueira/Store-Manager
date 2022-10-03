const sinon = require('sinon');
const { expect } = require('chai');

const productsServices = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');

const controllerMock = require('./mocks/product.controller.mock');

describe('Testa a camada de controle referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsServices, 'get').resolves(controllerMock.products);
  });
  after(async () => {
    await productsServices.get.restore();
  });
  it('Testa a função get para a rota products', async function () {
    const result = await productsController.get();
    expect(result).to.equal(controllerMock.products);
  });
});
describe('Testa a camada de controle referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsServices, 'post').resolves(controllerMock.produtoX);
  });
  after(async () => {
    await productsServices.post.restore();
  });
  it('Testa a função post para a rota products', async function () {
    const result = await productsController.post(controllerMock.produtoX.name);
    expect(result).to.equal(controllerMock.produtoX);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsServices, 'post').resolves(1);
  });
  after(async () => {
    await productsServices.post.restore();
  })
  it('Testa a função post para a rota products, para "name" undefined', async function () {
    const result = await productsController.post(undefined);
    expect(result).to.equal(1);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsServices, 'post').resolves(2);
  });
  after(async () => {
    await productsServices.post.restore();
  })
  it('Testa a função post para a rota products, para "name" de tamanho menor que 5', async function () {
    const result = await productsServices.post("Prod");
    expect(result).to.equal(2);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsServices, 'put').resolves(1);
  });
  after(async () => {
    await productsServices.put.restore();
  })
  it('Testa a função put para a rota products, para "name" undefined', async function () {
    const result = await productsController.put(undefined, 3);
    expect(result).to.equal(1);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsServices, 'del').resolves();
    await sinon.stub(productsServices, 'get').resolves(controllerMock.products);
  });
  after(async () => {
    await productsServices.get.restore();
    await productsServices.del.restore();
  });
  it('Testa a função delete para a rota products, para "id" listado', async function () {
    const result = await productsController.del(1);
    expect(result).to.equal(undefined);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsServices, 'getQuery').resolves(controllerMock.products[0]);
  });
  after(async () => {
    await productsServices.getQuery.restore();
  })
  it('Testa a função get para a rota products/search', async function () {
    const result = await productsController.getQuery('Martelo');
    expect(result).to.equal(controllerMock.products[0]);
  });
});
