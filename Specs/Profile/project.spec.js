var loginPg = require("../../Pages/loginPO");
var proj = require("../../Pages/projectPO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("Verify a project in a profile can be added, updated and deleted", function () {
  it("Should add project", function () {
    proj.addYourProject();
    expect(proj.success_msg.isPresent()).toBe(true);
  });

  it("Should update project", function () {
    proj.updateProject();
    expect(addProject.success_msg.isPresent()).toBe(true);
  });

  it("Should delete project", function () {
    proj.deleteProject();
    expect(proj.success_msg.isPresent()).toBe(true);
  });

  afterEach(function () {
    logoutob.clickProfileMenu();
    logoutob.clickLogout();
  });
});
