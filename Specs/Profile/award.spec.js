var loginPg = require("../../Pages/loginPO");
var awd = require("../../Pages/awardPO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("Verify an award in a profile can be added, updated and deleted", function () {
  it("Should add an award", function () {
    awd.addYourAward();
    expect(awd.success_msg.isPresent()).toBe(true);
  });

  it("Should update an award", function () {
    awd.updateYourAward();
    expect(awd.success_msg.isPresent()).toBe(true);
  });

  it("Should delete an award", function () {
    awd.deleteYourAward();
    expect(awd.success_msg.isPresent()).toBe(true);
  });

  afterEach(function () {
    logoutob.clickProfileMenu();
    logoutob.clickLogout();
  });
});
