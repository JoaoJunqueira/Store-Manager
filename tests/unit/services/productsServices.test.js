const sinon = require('sinon');
const { expect } = require('chai');

const productsModel = require('../../../src/models/productsModel');
const productsServices = require('../../../src/services/productsService');

const modelMock = require('./mocks/product.service.mock');

describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'get').resolves(modelMock.products);
  });

  after(async () => {
    await productsModel.get.restore();
  })

  it('Testa a função get para a rota products', async function () {
    const result = await productsServices.get();
    expect(result).to.equal(modelMock.products);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'getQuery').resolves(modelMock.products[0]);
  });
  after(async () => {
    await productsModel.getQuery.restore();
  })
  it('Testa a função get para a rota products', async function () {
    const result = await productsServices.getQuery('Martelo');
    expect(result).to.equal(modelMock.products[0]);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'post').resolves(4);
  });
  after(async () => {
    await productsModel.post.restore();
  })
  it('Testa a função post para a rota products, para "name" válido', async function () {
    const result = await productsServices.post("ProdutoX");
    expect([result]).to.deep.equal(modelMock.newProduct);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'post').resolves(4);
  });
  after(async () => {
    await productsModel.post.restore();
  })
  it('Testa a função post para a rota products, para "name" undefined', async function () {
    const result = await productsServices.post(undefined);
    expect(result).to.equal(1);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'post').resolves(4);
  });
  after(async () => {
    await productsModel.post.restore();
  })
  it('Testa a função post para a rota products, para "name" de tamanho menor que 5', async function () {
    const result = await productsServices.post("Prod");
    expect(result).to.equal(2);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'post').resolves(4);
  });
  after(async () => {
    await productsModel.post.restore();
  })
  it('Testa a função put para a rota products, para "name" undefined', async function () {
    const result = await productsServices.put(undefined, 3);
    expect(result).to.equal(1);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'post').resolves(4);
  });
  after(async () => {
    await productsModel.post.restore();
  });
  it('Testa a função put para a rota products, para "name" de tamanho menor que 5', async function () {
    const result = await productsServices.put("Prod", 3);
    expect(result).to.equal(2);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'get').resolves(modelMock.products);
  });
  after(async () => {
    await productsModel.get.restore();
  });
  it('Testa a função put para a rota products, para "id" maior que o tamanho da lista', async function () {
    const id = 6;
    const result = await productsServices.put("ProdutoX", id);
    expect(result).to.equal(3);
  });
});

describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'get').resolves(modelMock.products);
  });
  after(async () => {
    await productsModel.get.restore();
  });
  it('Testa a função put para a rota products, para "id" menor que o tamanho da lista', async function () {
    const id = 3;
    const result = await productsServices.put("ProdutoX", id);
    expect(result).to.deep.equal([modelMock.updatedProducts[id-1]]);
  });
});
describe('Testa a camada de serviço referente a rota products', function () {
  before(async () => {
    await sinon.stub(productsModel, 'del').resolves();
    await sinon.stub(productsModel, 'get').resolves(modelMock.products);
  });
  after(async () => {
    await productsModel.get.restore();
  });
  it('Testa a função delete para a rota products, para "id" não listado', async function () {
    const result = await productsServices.del(6);
    expect(result).to.equal(null);
  });
  it('Testa a função delete para a rota products, para "id" listado', async function () {
    const result = await productsServices.del(1);
    expect(result).to.equal(undefined);
  });
});


