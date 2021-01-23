var loginPg = require("../../Pages/loginPO");
var profilePg = require("../../Pages/profilePO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("Basic Profile info", function () {
  it("Should fill basic profile information with correct data", function () {
    profilePg.clickEditLink();
    profilePg.selectMaritalStatusdropdown();
    profilePg.selectCareerLeveldropdown();
    profilePg.selectDegreeLeveldropdown();
    profilePg.selectgGenderRadioButton();
    profilePg.clickNextButton();
    profilePg.enterMobileNumber();
    profilePg.enterCity();
    profilePg.clickSaveButton();
  });

  it("Should not save profile in case of any missing information", function () {
    profilePg.clickEditLink();
    profilePg.leaveLastNameEmpty();
    expect(browser.getCurrentUrl()).toContain("/basicprofile");
  });

  afterEach(function () {
    logoutob.clickProfileMenu();
    logoutob.clickLogout();
  });
});
