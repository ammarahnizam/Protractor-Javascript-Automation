var logout = function () {
  //Locators
  this.profile_menu = element(by.id("registrationEmailLink"));
  this.logout_option = element(
    by.css("ul.dropdown-menu:nth-child(2) > li:nth-child(5) > a")
  );

  this.clickProfileMenu = function () {
    this.profile_menu.click();
  };

  this.clickLogout = function () {
    this.logout_option.click();
  };
};
module.exports = new logout();
