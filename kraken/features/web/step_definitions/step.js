const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/section/form/button/span');
    return await element.click();
});

Then('I click tag button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[3]');
    return await element.click();
});

Then('I click new tag', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/a/span');
    return await element.click();
});

Then('I click tag name', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[1]/div[1]/input');
    return await element.click();
});

Then('I click tag description', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[3]/textarea');
    return await element.click();
});

Then('I click save', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div[1]/header/section/button/span');
    return await element.click();
});

Then('I click pages button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[2]');
    return await element.click();
});

Then('I click new page', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/a/span');
    return await element.click();
});

Then('I click pages content field', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/section/div[1]/div[1]/article/div[1]/div');
    return await element.click();
});

Then('I click on publish button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/section/header/section/button[2]/span');
    return await element.click();
});

Then('I click on continue button', async function() {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[3]/button/span');
    return await element.click();
});

Then('I click on publish page button', async function() {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/button[1]/span');
    return await element.click();
});

Then('I click on existing tag', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol');
    return await element.click();
});

Then('I click on existing page', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/ol/li[1]');
    return await element.click();
});

Then('I click update button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/section/header/section/button[1]/span');
    return await element.click();
});

Then('I click back button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/section/header/div/a/span');
    return await element.click();
});

Then('I click settings button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a');
    return await element.click();
});

Then('I click integrations button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[6]/a[1]/div');
    return await element.click();
});

Then('I click add custom integration button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section[2]/div[2]/a/span');
    return await element.click();
});

Then('I click on integration name', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[1]/fieldset');
    return await element.click();
});

Then('I click on create button', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]/span');
    return await element.click();
});

Then('I click on integration description', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div[2]/section/div/div/div[2]/div[2]/input');
    return await element.click();
});

Then('I click on save button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div[1]/header/section/button/span');
    return await element.click();
});

Then('I click delete tag button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/button/span');
    return await element.click();
});

Then('I click delete button', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]/span');
    return await element.click();
});

Then('I click on page setting button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/button/span');
    return await element.click();
});

Then('I click on delete page button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/button/span');
    return await element.click();
});

Then('I click on delete confirm button', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]/span');
    return await element.click();
});

Then('I click on excerpt textarea', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/div[5]/textarea');
    return await element.click();
});

Then('I click on an existing integration', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section[2]/div[1]');
    return await element.click();
});

Then('I click on integration name textarea', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/form/div[2]/section/div/div/div[2]/div[1]/input');
    return await element.click();
});

Then('I click on delete integration button', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section[2]/div/button/span');
    return await element.click();
});

Then('I click on delete confirm integration button', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]/span');
    return await element.click();
});

