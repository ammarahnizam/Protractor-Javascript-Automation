var resume = function () {
  this.dropdown = function (dropdownName) {
    var openDropdown = function () {
      element(by.css('.navbar-nav[style="padding-left:10px;"]'))
        .element(by.linkText(dropdownName))
        .click();
    };

    return {
      option: function (optionName) {
        openDropdown();
        return element(by.css("a.visible-lg > span")).element(
          by.linkText(optionName)
        );
      },
    };
  };
};

module.exports = new resume();
