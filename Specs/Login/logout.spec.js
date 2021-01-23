var loginPg = require("../../Pages/loginPO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("Verify Logout Functionality", function () {
  it(" Logout sould be successful", function () {
    logoutob.clickProfileMenu();
    logoutob.clickLogout();
    expect(browser.getCurrentUrl()).toEqual("https://jobee.pk/");
  });
});
