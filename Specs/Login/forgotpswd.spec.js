var loginPg = require("../../Pages/loginPO");

describe("Verify Forgot Password Functionality", function () {
  it("Should display a success message if email_id exists", function () {
    loginPg.navigatetoLogin();
    loginPg.enterCorrForgotPswd();
    expect(loginPg.correct_forgot_pswd_msg.getText()).toContain(
      "Forgot Password Confirmation"
    );
  });

  it("Should display an error message if email_id does not exist", function () {
    loginPg.navigatetoLogin();
    loginPg.enterWrongForgotPswd();
    expect(loginPg.wrong_forgot_pswd_msg.getText()).toEqual(
      "We can't verify your email address."
    );
  });

  it("Should display an error message if email field of Forgot Password is left empty", function () {
    loginPg.navigatetoLogin();
    loginPg.emptyForgotPswd();
    expect(loginPg.empty_forgot_pswd_msg.getText()).toEqual(
      "This field is required."
    );
  });
});
