/// <reference types="cypress"/>

describe('Buscar dispositivo especifico', () => {
  it('', () => {

    const deviceID = '7'
    cy.request({
      method: 'GET',
      url: `https://api.restful-api.dev/objects/${deviceID}`,
      failOnStatusCode: false
    }).as('getDeviceResult')
    //Validacoes do body
    
    cy.get('@getDeviceResult').then((response) => {
      expect(response.status).equal(200)
      expect(response.body.id).equal(deviceID)
      expect(response.body.name).equal('Apple MacBook Pro 16')
      
      expect(response.body.data).not.empty

      expect(response.body.data.year).equal(2019)
      expect(response.body.data.price).equal(1849.99)
      expect(response.body.data['CPU model']).equal('Intel Core i9')
      expect(response.body.data['Hard disk size']).equal('1 TB')
    })
  })
})