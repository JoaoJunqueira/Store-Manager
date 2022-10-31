const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController');
const mockController = require('./mocks/sale.controller.mock');

describe('Testa a camada de controller referente a rota sales', function () {
  before(async () => {
    await sinon.stub(salesService, 'get').resolves(mockController.getFullResponse);
  });
  after(async () => {
    await salesService.get.restore();
  })
  it('Testa a função get para a rota sales', async function () {
    const result = await salesController.get();
    expect(result).to.deep.equal(mockController.getFullResponse);
  });
})
describe('Testa a camada de controller referente a rota sales', function () {
  before(async () => {
    await sinon.stub(salesService, 'getId').resolves(mockController.getIdResponse);
  });
  after(async () => {
    await salesService.getId.restore();
  })
  it('Testa a função get para a rota sales para o id 1', async function () {
    const result = await salesController.getId(1);
    expect(result).to.deep.equal(mockController.getIdResponse);
  });
})
describe('Testa a camada de controller referente a rota sales', function () {
  before(async () => {
    await sinon.stub(salesService, 'del').resolves('Sale deleted');
  });
  after(async () => {
    await salesService.del.restore();
  })
  it('Testa a função delete para a rota sales', async function () {
    const result2 = await salesController.del(1);
    expect(result2).to.equal('Sale deleted');
  });
})