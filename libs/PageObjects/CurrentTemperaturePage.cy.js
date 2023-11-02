
class CurrentTemperature {
  elements = {
      temperatureIndicator: () => cy.get("#temperature"),
      buyMoisturizerButton:() => cy.contains("Buy moisturizers"),
      buySunscreenButton:() => cy.contains("Buy moisturizers")
  };
}
module.exports = new CurrentTemperature();
