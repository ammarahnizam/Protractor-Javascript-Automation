var loginPg = require("../../Pages/loginPO");
var search = require("../../Pages/jobPO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("Search Functionality: ", function () {
  it("Should see Search Results in case Job exists", function () {
    search.navigatetoJobs();
    search.enterSearch();
    expect(search.heading.get(0).getText()).toContain("Jobs");
  });

  it("Should see no Search Results in case Job doesn't exists", function () {
    search.navigatetoJobs();
    search.enterWrongSearch();
    expect(search.message.getText()).toContain("No record found.");
  });

  afterEach(function () {
    logoutob.clickProfileMenu();
    logoutob.clickLogout();
  });
});
