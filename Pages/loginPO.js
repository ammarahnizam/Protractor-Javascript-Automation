var testdata = require("../Testdata/data.json");
var creds = require("../Testdata/credentials.json");

var loginUser = function () {
  //Locators

  this.email_id = element(by.id("Email"));
  this.pswd = element(by.name("Password"));
  this.btnsubmit = element(by.id("login"));
  this.invaliderrmsg = element(
    by.xpath('//*[@id="loginForm"]/form/div[1]/ul/li')
  );
  this.forgot_pswd = element(by.linkText("Forgot password?"));
  this.verify_email = element(
    by.xpath('//*[@id="RenderBody"]/div/div/div/div/div/form/div[2]/div/input')
  );
  this.empty_forgot_pswd_msg = element(
    by.xpath(
      '//*[@id="RenderBody"]/div/div/div/div/div/form/div[1]/div[1]/div/ul'
    )
  );
  this.wrong_forgot_pswd_msg = element(
    by.xpath('//*[@id="RenderBody"]/div/div/div/div/div/p')
  );
  this.correct_forgot_pswd_msg = element(
    by.xpath('//*[@id="RenderBody"]/hgroup/h1')
  );
  this.login_link = element(
    by.css("ul.navbar-nav:nth-child(2) > li:nth-child(1) > a")
  );

  // Methods
  this.navigatetoLogin = function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(4000);
    browser.driver.manage().window().maximize();
    browser.get(testdata.url);
  };

  this.enterLoginCreds = function () {
    this.email_id.sendKeys(creds.email);
    this.pswd.sendKeys(creds.password);
    this.btnsubmit.click();
  };

  this.enterCorrForgotPswd = function () {
    this.forgot_pswd.click();
    this.email_id.sendKeys(creds.email);
    this.verify_email.click();
  };

  this.enterWrongForgotPswd = function () {
    this.forgot_pswd.click();
    this.email_id.sendKeys(creds.incorrectemail);
    this.verify_email.click();
  };

  this.emptyForgotPswd = function () {
    this.forgot_pswd.click();
    this.verify_email.click();
  };

  this.enterWrongCreds = function () {
    this.email_id.sendKeys(creds.email);
    this.pswd.sendKeys(creds.incorrectpswd);
    this.btnsubmit.click();
  };

  this.enterNoCreds = function () {
    this.email_id.clear();
    this.pswd.clear();
    this.btnsubmit.click();
  };

  this.clickLoginLink = function () {
    this.login_link.click();
  };
};
module.exports = new loginUser();
