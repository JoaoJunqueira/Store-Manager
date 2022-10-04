const sinon = require('sinon');
const { expect } = require('chai');

const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService');
const mockService = require('./mocks/sale.service.mock');

describe('Testa a camada de serviço referente a rota sales', function () {
  before(async () => {
    await sinon.stub(salesModel, 'get').resolves(mockService.getFullResponse);
  });
  after(async () => {
    await salesModel.get.restore();
  })
  it('Testa a função get para a rota sales', async function () {
    const result = await salesService.get();
    expect(result).to.equal(mockService.getFullResponse);
  });
})
describe('Testa a camada de serviço referente a rota sales', function () {
  before(async () => {
    await sinon.stub(salesModel, 'getId').resolves(mockService.getIdResponse);
  });
  after(async () => {
    await salesModel.getId.restore();
  })
  it('Testa a função get para a rota sales para o id 1', async function () {
    const result = await salesService.getId(1);
    expect(result).to.equal(mockService.getIdResponse);
  });
})
describe('Testa a camada de serviço referente a rota sales', function () {
  before(async () => {
    await sinon.stub(salesModel, 'del').resolves();
  });
  after(async () => {
    await salesModel.del.restore();
  })
  it('Testa a função delete para a rota sales para o id 1', async function () {
    const result1 = await salesService.del(6);
    expect(result1).to.equal('Sale not found');
    const result2 = await salesService.del(1);
    expect(result2).to.equal('Sale deleted');
  });
})