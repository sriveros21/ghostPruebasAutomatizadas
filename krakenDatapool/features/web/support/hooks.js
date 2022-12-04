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
