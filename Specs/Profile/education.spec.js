var loginPg = require("../../Pages/loginPO");
var educ = require("../../Pages/EducationPO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("Verify an educational degree  in a profile can be added, updated and deleted", function () {
  it("Should add an educaton degree", function () {
    educ.addYourEducation();
    expect(educ.success_msg.isPresent()).toBe(true);
  });

  it("Should update an educaton degree", function () {
    educ.updateYourEducation();
    expect(educ.success_msg.isPresent()).toBe(true);
  });

  it("Should delete an educaton degree", function () {
    educ.deleteYourEducation();
    expect(educ.success_msg.isPresent()).toBe(true);
  });

  afterEach(function () {
    logoutob.clickProfileMenu();
    logoutob.clickLogout();
  });
});
