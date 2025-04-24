const { faker } = require('@faker-js/faker');

Feature('login');

Scenario('Login invalido - Email + senha vazios', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('//section[@id="top_header"]//li[1]//a[1]')
  I.waitForElement('#createAccount', 3)

  I.click('#btnLogin')
  I.see('E-mail inválido.'||'Senha inválida.')
});

Scenario('Login invalido - Email vazio', ({ I }) => {
  I.amOnPage('https://automationpratice.com.br/')
  I.click('//section[@id="top_header"]//li[1]//a[1]')
  I.waitForElement('#createAccount', 3)
  I.fillField('#password','123456')
  I.click('#btnLogin')
  I.see('E-mail inválido.')
});

Scenario('Login invalido - Senha vazia', ({ I }) => {
  const email = faker.internet.email();
  I.amOnPage('https://automationpratice.com.br/')
  I.click('//section[@id="top_header"]//li[1]//a[1]')
  I.waitForElement('#createAccount', 3)
  I.fillField('#user',email)
  I.click('#btnLogin')
  I.see('Senha inválida.')
});

Scenario('Login OK - Email e senha validos',  ({ I }) => {
  const email = faker.internet.email();
  I.amOnPage('https://automationpratice.com.br/')
  I.click('//section[@id="top_header"]//li[1]//a[1]')
  I.waitForElement('#createAccount', 3)
  I.fillField('#user',email)
  I.fillField('#password','123456')
  I.click('#btnLogin')
  
});


