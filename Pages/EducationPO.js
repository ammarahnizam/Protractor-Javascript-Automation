var education = function () {
  //Locators

  this.timeout_interval = 5000;
  this.delete_education = element(by.css('[ng-click="DeleteEducation()"]'));
  this.add_education = element(
    by.css(
      "#EducationDiv > div:nth-child(1) > div:nth-child(2) > h6:nth-child(1) > span"
    )
  );
  this.education_degree_title = element(by.id("txtDegreeTitle"));
  this.success_msg = element(by.xpath('//*[@id="divSuccess"]'));
  this.education_degree_level = element(by.id("ddlDegreeLevel")).element(
    by.css("#ddlDegreeLevel > option[value='number:4']")
  );

  this.save_education_button = element(
    by.css('[ng-click="SaveEducationChanges(false)"]')
  );

  this.update_education = element(
    by.css("#EducationDiv > div:nth-child(3) > div")
  );

  // Add Education Degree
  this.addYourEducation = function () {
    let re = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.add_education),
      this.timeout_interval
    );
    this.add_education.click();
    this.education_degree_title.sendKeys(re);
    this.education_degree_level.click();
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_education_button),
      this.timeout_interval
    );
    this.save_education_button.click();
  };

  // Update Education Degree
  this.updateYourEducation = function () {
    let re = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_education),
      this.timeout_interval
    );
    this.update_education.click();
    this.education_degree_title.sendKeys(re);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_education_button),
      this.timeout_interval
    );
    this.save_education_button.click();
  };

  // Delete Education Degree
  this.deleteYourEducation = function () {
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_education),
      this.timeout_interval
    );
    this.update_education.click();
    this.delete_education.click();
  };
};
module.exports = new education();
