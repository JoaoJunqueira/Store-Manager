const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');
const modelMock = require('./mocks/product.model.mock');

describe('Testa a camada de model referente a rota products', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([modelMock.products]);
  });

  after(async () => {
    await connection.execute.restore();
  })

  it('Testa a função get para a rota products', async function () {
    const result = await productsModel.get();
    expect(result).to.equal(modelMock.products);
    // console.log(result);
  });
})
describe('Testa a camada de model referente a rota products', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
  });

  after(async () => {
    await connection.execute.restore();
  })

  it('Testa a função post para a rota products', async function () {
    const result = await productsModel.post(modelMock.produtoX);
    expect(result).to.equal(4);
  });
})
describe('Testa a camada de model referente a rota products', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([modelMock.updateProduct]);
  });

  after(async () => {
    await connection.execute.restore();
  })

  it('Testa a função put para a rota products', async function () {
    const result = await productsModel.put(modelMock.newName);
    expect(result).to.equal(modelMock.updateProduct);
  });
})
describe('Testa a camada de model referente a rota products', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
  });

  after(async () => {
    await connection.execute.restore();
  })

  it('Testa a função delete para a rota products', async function () {
    const result = await productsModel.del(2);
    expect(result).to.deep.equal({ affectedRows: 1 });
  });
})
describe('Testa a camada de model referente a rota products', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([modelMock.queryResponse]);
  });

  after(async () => {
    await connection.execute.restore();
  })

  it('Testa a função get para a rota products/search', async function () {
    const result = await productsModel.getQuery(modelMock.query);
    expect(result).to.deep.equal(modelMock.queryResponse);
  });
})
describe('Testa a camada de model referente a rota products', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([modelMock.products]);
  });

  after(async () => {
    await connection.execute.restore();
  })

  it('Testa a função get para a rota products/search com q = ""', async function () {
    const result = await productsModel.getQuery(modelMock.emptyQuery);
    expect(result).to.deep.equal(modelMock.products);
  });
})
