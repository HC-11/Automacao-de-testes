
Feature('Login, User name on login');
/* Execute a scenario before another
Before(() => {
Scenario('Login OK + pagina do usuario', ({ I }) => {
  
  });
})
*/
Scenario('Login OK + pagina do usuario', ({ I }) => {
I.amOnPage('https://automationpratice.com.br/')
//pause() --> pause and analyze
I.click('//section[@id="top_header"]//li[1]//a[1]')
I.fillField('#user', 'eduardofinotti@gmail.com')
I.fillField('#password', '123456')
I.click('#btnLogin')
I.wait(5)
I.click('OK')
I.see('eduardofinotti@gmail.com')

});
/* Execute a scenario after another
After(() => {
Scenario('Login OK + pagina do usuario', ({ I }) => {
  
  });
})
*/