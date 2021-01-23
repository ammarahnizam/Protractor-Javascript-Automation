var loginPg = require('../../Pages/loginPO')


describe('Verify invalid Login Functionality', function () {

  it('Should fail when login with invalid credentials', function () {
   
  loginPg.navigatetoLogin();
  loginPg.enterWrongCreds();
  expect(loginPg.invaliderrmsg.getText()).toEqual("Invalid login attempt.");    
  });
 

  it('Should fail when login with empty credentials', function () {
   
    loginPg.navigatetoLogin();
    loginPg.enterNoCreds();
    let list = $$('.field-validation-error');
   expect(list.get(0).getText()).toBe('This field is required.');

    });



});