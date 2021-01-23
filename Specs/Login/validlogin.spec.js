var loginPg = require('../../Pages/loginPO')


describe('Verify Valid Login Functionality', function () {

  it('Verify login with valid credentials should be successful', function () {
   
  loginPg.navigatetoLogin();
  expect(browser.getTitle()).toEqual("Login - Jobee.Pk");
  loginPg.enterLoginCreds();
  expect(browser.getCurrentUrl()).toContain('/profile');
  console.log("Login is successful");
	

    
  });


 

});