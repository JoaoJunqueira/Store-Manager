const sinon = require('sinon');
const { expect } = require('chai');

const { connection } = require('../../../src/models/connection');
const salesModel = require('../../../src/models/salesModel');
const modelMock = require('./mocks/sale.model.mock');

describe('Testa a camada de model referente a rota sales', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([modelMock.getFullResponse]);
  });
  after(async () => {
    await connection.execute.restore();
  })
  it('Testa a função get para a rota sales', async function () {
    const result = await salesModel.get();
    expect(result).to.equal(modelMock.getFullResponse);
  });
})
describe('Testa a camada de model referente a rota sales', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves([modelMock.getIdResponse]);
  });
  after(async () => {
    await connection.execute.restore();
  })
  it('Testa a função get para a rota sales para o id 1', async function () {
    const result = await salesModel.getId(1);
    expect(result).to.equal(modelMock.getIdResponse);
  });
})
describe('Testa a camada de model referente a rota sales', function () {
  before(async () => {
    await sinon.stub(connection, 'execute').resolves();
  });
  after(async () => {
    await connection.execute.restore();
  })
  it('Testa a função delete para a rota sales para o id 1', async function () {
    await salesModel.del(1);
  });
})