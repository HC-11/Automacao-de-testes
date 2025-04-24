var validacao = require('assert')
const { faker } = require('@faker-js/faker');

Feature('Create account');

Scenario('Criar conta com FakerJS', async({ I }) => {
  
  I.amOnPage('http://www.automationpractice.pl/index.php');
  I.click('.login')
  
  const firstName = faker.person.firstName('male');
  const lastName = faker.person.lastName() 
  const email = faker.internet.email()
  
  I.fillField('#email_create', email)
  I.click('#SubmitCreate')
  
  I.waitForElement('#customer_firstname', 4)
  var tituloPrincipal = await I.grabTextFrom('.page-heading')
  validacao.equal(tituloPrincipal,'CREATE AN ACCOUNT')

  I.scrollTo('#years')

  I.click('#id_gender1')
  I.fillField('#customer_firstname', firstName)
  I.fillField('#customer_lastname', lastName)
  I.fillField('#passwd',secret(12345))

  I.selectOption('#days', '27')
  I.selectOption('#months', '7')
  I.selectOption('#years', '1997')

  I.click('#submitAccount')
  I.waitForElement('.myaccount-link-list',4)
  I.see('Your account has been created.')
});

