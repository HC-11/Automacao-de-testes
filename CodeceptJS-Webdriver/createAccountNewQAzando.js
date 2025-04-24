var validacao = require('assert');
const { faker } = require('@faker-js/faker');
Feature('Create account');

Scenario('Cadastro de usuario', async ({ I }) => {

  I.amOnPage('/')
  var title = await I.grabTitle()
  validacao.equal(title, 'QAZANDO Shop E-Commerce')
  
  const fullName = faker.person.fullName('male')
  const email = faker.internet.email()
  
  I.click('//a[normalize-space()="Cadastro"]')
  
  I.waitForElement('#btnRegister', 4)

  I.see('Cadastro de usuário')  

  I.fillField('#user', fullName)
  I.fillField('#email', email)
  I.fillField('#password', secret('123456'))
  
  I.scrollTo('#btnRegister')
  I.click('#btnRegister')
    
});
