require('cypress-xpath');

class SunscreensPage {
    elements = {
        productsNames:() => cy.xpath('//div[contains(@class, "text-center")]/p[1]'),
        productsPrices:() => cy.xpath('//div[contains(@class, "text-center")]/p[2]'),
        cartButton:() => cy.contains('Cart')
    };
  }
  module.exports = new SunscreensPage();
  