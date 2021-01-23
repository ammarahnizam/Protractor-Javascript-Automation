var project = function () {
  //Locators
  this.timeout_interval = 8000;
  this.add_project = element(by.css('[ng-click="PopUpProject()"]'));
  this.Project_title = element(by.id("enterProjectTitle"));
  this.company_name = element(by.model("projectShadow.companyText"));
  this.tools = element(by.model("projectShadow.tools"));
  this.save_button = element(by.id("saveProject"));
  this.success_msg = element(by.xpath('//*[@id="divSuccess"]'));
  this.update_icon = element(
    by.css(
      "div.pointer:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label"
    )
  );
  this.delete_button = element.all(by.xpath('//button [text()= "Delete"]'));

  this.addYourProject = function () {
    let r = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.add_project),
      this.timeout_interval
    );
    this.add_project.click();
    this.Project_title.sendKeys(r);
    this.company_name.sendKeys("IBM");
    this.tools.sendKeys("WebSphere");
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_button),
      this.timeout_interval
    );
    this.save_button.click();

    //let ale= browser.switchTo.alert();
  };

  this.updateProject = function () {
    let rd = Math.random().toString(36).substring(7);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_icon),
      this.timeout_interval
    );
    this.update_icon.click();
    this.Project_title.clear();
    this.Project_title.sendKeys(rd);
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.save_button),
      this.timeout_interval
    );
    this.save_button.click();
  };

  this.deleteProject = function () {
    browser.driver.wait(
      ExpectedConditions.visibilityOf(this.update_icon),
      this.timeout_interval
    );
    this.update_icon.click();
    this.delete_button.get(3).click();
  };
};
module.exports = new project();
