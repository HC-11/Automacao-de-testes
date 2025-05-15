/// <reference types="cypress"/>

describe('Deletar dispositivo', () => {
  it('', () => {

  //1.Fazer um POST  
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
    }).as('postDeviceResult').then((response_post) => {
      expect(response_post.status).equal(200)


      cy.request({
        method:'DELETE',
        url:`https://api.restful-api.dev/objects/${response_post.body.id}`,
        failOnStatusCode: false}).as('deleteDeviceResult')

      cy.get('@deleteDeviceResult').then((respostaDelete) => {
        expect(respostaDelete.status).equal(200)
        expect(respostaDelete.body.message).equal(`Object with id = ${response_post.body.id} has been deleted.`)
      })
    })
  })

  it('Deletar dispositivo nao existente', () => {
    const id_inexistente = 'bolinha'

    cy.request({
      method: 'DELETE',
      url: `https://api.restful-api.dev/objects/${id_inexistente}`,
      failOnStatusCode: false,
    }).as('deleteDeviceResult')

    cy.get('@deleteDeviceResult').then((respostaDelete) => {
      expect(respostaDelete.status).equal(404)
      expect(respostaDelete.body.error)
      .equal(`Object with id = ${id_inexistente} doesn't exist.`)
    })
  })

//Validando que nao pode deletar ids 1-13
  it('Nao pode deletar dispositivo de id 1-13', () => {
    for (let i = 1; i <= 13; i++) {
      cy.request({
        method: 'DELETE',
        url: `https://api.restful-api.dev/objects/${i}`,
        failOnStatusCode: false,
      }).as('deleteInvalidResult')
      cy.get('@deleteInvalidResult').then((respostaDeleteInvalido) => {
        expect(respostaDeleteInvalido.status).equal(405)
        expect(respostaDeleteInvalido.body.error)
        .equal(`${i} is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id.`)
       })
    }
  
   })

//Validando que nao pode deletar ids 1-13 com array e loop
it.only('Nao pode deletar dispositivo de id 1-13', () => {   
  const id_numbers = [ 7, 12, 4, 1, 11, 5, 3, 10, 2, 6, 8, 9, 13]

  for (let i = 0; i <= id_numbers.length -1; i++){
    cy.request({
      method: 'DELETE',
      url: `https://api.restful-api.dev/objects/${id_numbers[i]}`,
      failOnStatusCode: false,
    }).as('deleteInvalidResult')
    cy.get('@deleteInvalidResult').then((respostaDeleteInvalido) => {
      expect(respostaDeleteInvalido.status).equal(405)
      expect(respostaDeleteInvalido.body.error)
      .equal(`${id_numbers[i]} is a reserved id and the data object of it cannot be deleted. You can create your own new object via POST request and try to send a DELETE request with new generated object id.`)
     })
    }
  })
})
