var testdata = require("../Testdata/data.json");

var job = function () {
  //Locators
  this.timeout_interval = 5000;
  this.input_city = element(by.id("txtCurrentCity"));
  this.functional_area = element(by.id("functionalarea"));
  this.search_button = element(by.css('[ng-click="applyTopFilters();"]'));
  this.heading = element.all(by.xpath('//span[text()= "Jobs in Karachi"]'));
  this.message = element(by.css("span.ng-scope:nth-child(1)"));

  this.navigatetoJobs = function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(4000);
    browser.driver.manage().window().maximize();
    browser.get(testdata.jobspageurl);
  };

  this.enterSearch = function () {
    this.input_city.sendKeys("Karachi");
    this.functional_area.sendKeys("Quality Assurance (QA)");
    this.search_button.click();
  };

  this.enterWrongSearch = function () {
    this.functional_area.clear();
    this.functional_area.sendKeys("Cook");
    this.search_button.click();
  };
};
module.exports = new job();
