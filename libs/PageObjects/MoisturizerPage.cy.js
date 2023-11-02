require('cypress-xpath');

class MoisturizerPage {
    elements = {
        aloeProducts:() => cy.xpath('//div[contains(@class, "text-center")]'),
        productsNames:() => cy.xpath('//div[contains(@class, "text-center")]/p[1]'),
        productsPrices:() => cy.xpath('//div[contains(@class, "text-center")]/p[2]'),
        cartButton:() => cy.contains('Cart')
    };
  }
  module.exports = new MoisturizerPage();
  