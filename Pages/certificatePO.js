var certificate = function () {
  //Locators
  this.timeout_interval = 8000;
  this.add_certification = element(by.css('[ng-click="AddCertification();"]'));
  this.certification_title = element(by.model("Certification.title"));
  this.save_changes = element(
    by.css('[ng-click="SaveCertificationChanges()"]')
  );
  this.success_msg = element(by.xpath('//*[@id="divSuccess"]'));
  this.update_certification = element(
    by.css("#CertificationDiv > div:nth-child(4) > div:nth-child(1) > label")
  );
  this.delete_certification = element.all(
    by.css(
      "#CertificationModal > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > button"
    )
  );

  this.addYourCertification = function () {
    let r = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.add_certification),
      this.timeout_interval
    );
    this.add_certification.click();
    this.certification_title.sendKeys(r);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_changes),
      this.timeout_interval
    );
    this.save_changes.click();
  };

  this.updateYourCertification = function () {
    let rd = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_certification),
      this.timeout_interval
    );
    this.update_certification.click();
    this.certification_title.clear();
    this.certification_title.sendKeys(rd);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_changes),
      this.timeout_interval
    );
    this.save_changes.click();
  };

  this.deleteYourCertification = function () {
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_certification),
      this.timeout_interval
    );
    this.update_certification.click();
    //browser.driver.wait(ExpectedConditions.visibilityOf( this.delete_certification), this.timeout_interval);
    this.delete_certification.get(1).click();
  };
};
module.exports = new certificate();
