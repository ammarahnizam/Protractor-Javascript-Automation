var award = function () {
  //Locators
  this.timeout_interval = 5000;
  this.add_award = element(by.id("btnAddAward"));
  this.award_title = element(by.model("Award.title"));
  this.save_award = element(by.css('[ng-click="SaveAwardChanges()"]'));
  this.success_msg = element(by.xpath('//*[@id="divSuccess"]'));
  this.update_award = element(
    by.css(
      "#AwardDiv > div:nth-child(4) > div:nth-child(1) > h5:nth-child(1) > span"
    )
  );
  this.delete_award = element(by.css('[ng-click="DeleteAward()"]'));

  this.addYourAward = function () {
    let ra = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.add_award),
      this.timeout_interval
    );
    this.add_award.click();
    this.award_title.sendKeys(ra);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_award),
      this.timeout_interval
    );
    this.save_award.click();
  };

  this.updateYourAward = function () {
    let rad = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_award),
      this.timeout_interval
    );
    this.update_award.click();
    this.award_title.clear();
    this.award_title.sendKeys(rad);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_award),
      this.timeout_interval
    );
    this.save_award.click();
  };

  this.deleteYourAward = function () {
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_award),
      this.timeout_interval
    );
    this.update_award.click();
    //browser.driver.wait(ExpectedConditions.visibilityOf( this.delete_certification), this.timeout_interval);
    this.delete_award.click();
  };
};
module.exports = new award();
