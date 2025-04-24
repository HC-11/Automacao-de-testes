/// <reference types="cypress"/>

describe('Upload dispositivo', () => {
  it('', () => {
    //Validar o timestamp do POST
    const dataAtual = new Date().toISOString().slice(0, 16)

    const body = {
        "name": "Pixel 9",
        "data": {
           "year": 2025,
           "price": 1799.99,
           "CPU model": "Google Tensor G4",
           "Hard disk size": "512 GB",
           "color": "Obsidian"
        }
     }

    cy.request({
      method: 'POST',
      url: `https://api.restful-api.dev/objects`,
      failOnStatusCode: false,
      body: body
    }).as('postDeviceResult')

    cy.get('@postDeviceResult').then((response) => {
      expect(response.status).equal(200)
      expect(response.body.id).not.empty
      expect(response.body.createdAt.slice(0, 16)).equal(dataAtual)
      expect(response.body.name).equal('Pixel 9')
      expect(response.body.data.year).equal(2025)
      expect(response.body.data.price).equal(1799.99)
      expect(response.body.data['CPU model']).equal('Google Tensor G4')
      expect(response.body.data['Hard disk size']).equal('512 GB')
      expect(response.body.data.color).equal('Obsidian')

    })
  })

  it('Postar dispositivo com body vazio', () => {
   
  cy.request({
    method: 'POST',
    url: `https://api.restful-api.dev/objects`,
    failOnStatusCode: false,
    body: ''
  }).as('postDeviceResult')

  cy.get('@postDeviceResult').then((response) => {
    expect(response.status).equal(400)
    expect(response.body.error)
    .equal("400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.")
    
    })
  })
})

