const { After, Before, AfterStep } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');

let stepnumber = 0

Before(async function() {
  this.deviceClient = new WebClient('chrome', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});

AfterStep(async function(scenario){
  stepnumber++
  // await this.driver.saveScreenshot("./reports/" + this.testScenarioId + "/screenshots/" + scenario.gherkinDocument.feature.name.replace(/\s/g, '') +  Math.round(+new Date() / 1000) + ".png");
  await this.driver.saveScreenshot("./reportes_modificados/" + "/screenshots/" + scenario.gherkinDocument.feature.name.replace(/\s/g, '') +  stepnumber + ".png");
})