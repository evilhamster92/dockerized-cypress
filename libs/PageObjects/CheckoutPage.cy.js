require('cypress-xpath');

class CheckoutPage {
    elements = {
        pageTitle:() => cy.contains('Checkout'),
        itemNameTableColumn: () => cy.contains('Item'),
        itemPriceTableColumn: () => cy.contains('Price'),
        payButton: () => cy.contains('Pay with'),
        stripeEmail: () => cy.get('#email'),
        stripeCardNumber: () => cy.get('#card_number'),
        stripeCcExpiry: () => cy.get('#cc-exp'),
        stripeCsc: () => cy.get('#cc-csc'),
        stripeZip: () => cy.get('#billing-zip'),
        stripeSubmitButton: () => cy.get('#submitButton')
    };
  }
  module.exports = new CheckoutPage();