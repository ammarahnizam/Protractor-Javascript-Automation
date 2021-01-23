var loginPg = require("../../Pages/loginPO");
var cert = require("../../Pages/certificatePO");
var logoutob = require("../../Pages/logoutPO");

beforeEach(function () {
  loginPg.navigatetoLogin();
  loginPg.enterLoginCreds();
});

describe("Verify a certificate in a profile can be added, updated and deleted:", function () {
  it("Should add certification", function () {
    cert.addYourCertification();
    expect(cert.success_msg.isPresent()).toBe(true);
  });

  it("Should update certification", function () {
    cert.updateYourCertification();
    expect(cert.success_msg.isPresent()).toBe(true);
  });

  it("Should delete certification", function () {
    cert.deleteYourCertification();
    expect(cert.success_msg.isPresent()).toBe(true);
  });

  afterEach(function () {
    logoutob.clickProfileMenu();
    logoutob.clickLogout();
  });
});
