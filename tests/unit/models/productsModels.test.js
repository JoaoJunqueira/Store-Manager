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
    console.log(result);
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
