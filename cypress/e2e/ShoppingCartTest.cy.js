import { checkPrime } from "crypto";
import CheckoutPage from "../../libs/PageObjects/CheckoutPage.cy.js";
import MoisturizerPage from "../../libs/PageObjects/MoisturizerPage.cy.js";


let temperature = 0;

describe("Shopping test", () => {
    before(() => {
        const url = Cypress.config().baseUrl;
        cy.visit(url + 'moisturizer');
    });

    it("Verify that the shopping cart looks correct. Complete payment for cart", () => {

        //click first available product to buy
        cy.contains('Add').click();    
        MoisturizerPage.elements.cartButton().click();

        //assert checkout page elements are displayed
        CheckoutPage.elements.itemNameTableColumn().should('be.visible');
        CheckoutPage.elements.itemPriceTableColumn().should('be.visible');

        CheckoutPage.elements.payButton().click();
        cy.wait(3000);

        //introduce card details
        CheckoutPage.elements.stripeEmail().type('test@email.com');
        CheckoutPage.elements.stripeCardNumber().type('4242424242424242');
        CheckoutPage.elements.stripeCcExpiry().type('11/29');
        CheckoutPage.elements.stripeCsc().type('123');
        CheckoutPage.elements.stripeZip().type('54321');    

        //click the pay button
        CheckoutPage.elements.stripeSubmitButton().click();

        //assert payment is successful
        cy.contains('PAYMENT SUCCESS').should('be.displayed');
    });
});
