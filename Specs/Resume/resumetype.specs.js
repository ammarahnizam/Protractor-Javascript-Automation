var loginPg = require("../../Pages/loginPO");
var res = require("../../Pages/resumePO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("protractor website", function () {
  

  it("should navigate to API view", function () {
    browser.get("https://jobee.pk/resume");
    browser.sleep(5000);
   res.dropdown("Resume").option("Modern").click();
  });
});