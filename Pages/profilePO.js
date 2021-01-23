var profilePage = function () {
  //Locators

  this.timeout_interval = 5000;
  this.edit_link = element(by.css("a.EditButton"));
  this.marital_status = element(by.id("maritalStatus")).element(
    by.css("option[value='S']")
  );
  this.career_level = element(by.id("careerLevel")).element(
    by.css("option[value='2']")
  );
  this.degree_level = element(by.id("degreeLevel")).element(
    by.css("option[value='5']")
  );
  this.gender_radiob = element(by.css("div.radio:nth-child(2) > label"));
  this.next_button = element(by.id("BasicNext"));
  this.mobile_numb = element(by.id("mobile"));
  this.city = element(by.id("city"));
  this.save_button = element(by.id("contactInfoSave"));
  this.last_name = element(by.name("LastName"));
  this.lastname_empty = element(by.css("input[style='border:1px solid red;']"));

  this.clickEditLink = function () {
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.edit_link),
      this.timeout_interval
    );
    this.edit_link.click();
  };

  //Select Marital Status Drop-down
  this.selectMaritalStatusdropdown = function () {
    this.marital_status.click();
  };

  this.selectCareerLeveldropdown = function () {
    this.career_level.click();
  };

  this.leaveLastNameEmpty = function () {
    this.last_name.clear();

    this.last_name.click();
  };

  this.selectDegreeLeveldropdown = function () {
    this.degree_level.click();
  };

  this.selectgGenderRadioButton = function () {
    this.gender_radiob.click();
  };

  this.clickNextButton = function () {
    this.next_button.click();
  };

  this.enterMobileNumber = function () {
    this.mobile_numb.clear();
    this.mobile_numb.sendKeys("03002245781");
  };

  this.enterCity = function () {
    this.city.clear();
    this.city.sendKeys("Karachi");
  };

  this.clickSaveButton = function () {
    this.save_button.click();
  };
};
module.exports = new profilePage();
