import currentTemperature from "../../libs/PageObjects/CurrentTemperaturePage.cy";
let temperature = 0;

describe("Shopping test", () => {
    before(() => {
        const url = Cypress.config().baseUrl;
        cy.visit(url);
    });

    it("Shop for moisturizers if the weather is below 19 degrees. Shop for suncreens if the weather is above 34 degrees.", () => {

        currentTemperature.elements.temperatureIndicator().should("be.visible");
        cy.get(currentTemperature.elements.temperatureIndicator())
        .then((element) => {
            temperature = element.text();
          });

        cy.log(temperature);

        if(temperature < 19)
        {
            currentTemperature.elements.buyMoisturizerButton().click();
        } else if (temperature > 34) {
            currentTemperature.elements.buySunscreenButton().click()
        } else {
            cy.log("Temperature is just right, no moisturizer or sunscreen needed.")
        }         
    });
});
