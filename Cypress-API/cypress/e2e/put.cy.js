/// <reference types="cypress"/>

describe('Update de dispositivo', () => {
  it('Post e depois Put', () => {

//Corpo do post  
   const bodyPost = {
    "name": "Galaxy Z Flip 6",
    "data": {
       "year": 2025,
       "price": 1299.99,
       "CPU model": "Snapdragon 3.4GHz",
       "Hard disk size": "512 GB",
       "color": "Silver shadow"
    }
 }
//Corpo do Put
  const bodyPut = {
      "name": "iPhone 16 Pro",
      "data": {
       "year": 2025,
       "price": 1499.99,
       "CPU model": "A18 Pro",
       "Hard disk size": "1 TB",
       "color": "Titanium white"
    }
 }
 //1. Fazer o POST
    cy.request({
      method: 'POST',
      url: `https://api.restful-api.dev/objects`,
      failOnStatusCode: false,
      body: bodyPost
    }).as('postDeviceResult')
//2. Validar o post
    cy.get('@postDeviceResult').then((response_post) => { 
      expect(response_post.status).equal(200) 
      expect(response_post.body.name).equal('Galaxy Z Flip 6')
      expect(response_post.body.data.year).equal(2025)
      expect(response_post.body.data.price).equal(1299.99)
      expect(response_post.body.data['CPU model']).equal("Snapdragon 3.4GHz")
      expect(response_post.body.data['Hard disk size']).equal("512 GB")
      expect(response_post.body.data.color).equal("Silver shadow")

      //3. Fazer o PUT
          cy.request({
            method: 'PUT',
            url: `https://api.restful-api.dev/objects/${response_post.body.id}`,
            failOnStatusCode: false,
            body: bodyPut
          }).as('putDeviceResult')
      //4. Validar o PUT
          cy.get('@putDeviceResult').then((response_put) => {
            expect(response_put.status).equal(200)
            expect(response_put.body.name).equal("iPhone 16 Pro")
            expect(response_put.body.data.year).equal(2025)
            expect(response_put.body.data.price).equal(1499.99)
            expect(response_put.body.data['CPU model']).equal("A18 Pro")
            expect(response_put.body.data['Hard disk size']).equal("1 TB")
            expect(response_put.body.data.color).equal("Titanium white")
      })
    })
  })
})