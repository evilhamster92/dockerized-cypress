import buyMoisturizer, { elements } from "../../libs/PageObjects/MoisturizerPage.cy";
let itemPrices;

describe("Buy moisturizer test", () => {
    before(() => {
        const url = Cypress.config().baseUrl;
        cy.visit(url + 'moisturizer');
        //currentTemperature.elements.buyMoisturizerButton().click();
    });

    it("Add two moisturizers to your cart.", () => {

        let zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]); 

        buyMoisturizer.elements.productsNames()
        .then($elements => {
            const texts = Array.from($elements, el => el.innerText)
            console.log(texts, "texts");

            //get product prices
            buyMoisturizer.elements.productsPrices().then($elements => {
                itemPrices = Array.from($elements, el => el.innerText.replace(/\D/g,''));
            
                //sort list by prices
                var namePriceMap = zip(texts, itemPrices).sort(compare);              
                console.log(namePriceMap);

                //get first item from ordered list that includes aloe
                var productName = namePriceMap.find( x => x[0].includes('Aloe'));

                //click on the "Add" button from cheapest aloe item
                cy.contains(productName[0]).parent()
                .contains("Add").click();

                //click on the "Add" from cheapest almond product
                var productName = namePriceMap.find( x => x[0].includes('Almond'));

                 //click on the "Add" button from cheapest aloe item
                 cy.contains(productName[0]).parent()
                 .contains("Add").click();
            })
        
            //click on the cart button
            buyMoisturizer.elements.cartButton().click();

            //assert correct page is displayed
            cy.contains('Checkout').should('be.visible');                      
        })
    });
});

function compare( a, b ) {
  if ( a.a2 < b.b2 ){
    return -1;
  }
  if ( a.a2 > b.b2 ){
    return 1;
  }
  return 0;
}
