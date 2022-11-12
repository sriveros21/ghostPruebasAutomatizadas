const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('#ember10');
    return await element.click();
})

When('I click userpic', async function() {
    let element = await this.driver.$('#ember39');
    return await element.click();
})

When('I click signout', async function() {
    let element = await this.driver.$('#ember78');
    return await element.click();
})

When('I click new post', async function() {
    let element = await this.driver.$('#ember26');
    return await element.click();
})

When('I enter post title {string}', async function (posttitle) {
    let element = await this.driver.$('textarea');
    return await element.setValue(posttitle);
});

When('I enter post description {string}', async function (postdescription) {
    let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
    return await element.setValue(postdescription);
});

When('I click publish post', async function() {
    let element = await this.driver.$('button.gh-publish-trigger');
    return await element.click();
})

When('I click final review', async function() {
    let element = await this.driver.$('button.gh-btn-black');
    return await element.click();
})

When('I click post now', async function() {
    let element = await this.driver.$('button.gh-btn-large');
    return await element.click();
})

When('I click post section', async function() {
    let element = await this.driver.$('#ember25');
    return await element.click();
})

Then('I click first post', async function () {
    let element = await this.driver.$('.gh-posts-list-item');
    return await element.click();
});

Then('I click edit post', async function () {
    let element = await this.driver.$(".edit");
    return await element.click();
});

When('I click update post', async function() {
    let element = await this.driver.$('button.gh-editor-save-trigger');
    return await element.click();
})

When('I click back analytics', async function() {
    let element = await this.driver.$('.gh-editor-back-button');
    return await element.click();
})

When('I click posts link', async function() {
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
})

When('I click post settings', async function() {
    let element = await this.driver.$('button.settings-menu-toggle');
    return await element.click();
})

When('I click delete post', async function() {
    let element = await this.driver.$('button.settings-menu-delete-button');
    return await element.click();
})

When('I click confirm delete', async function() {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
})

When('I click members link', async function() {
    let element = await this.driver.$('a[href="#/members/"]');
    return await element.click();
})

When('I click new member', async function() {
    let element = await this.driver.$('a[href="#/members/new/"]');
    return await element.click();
})

When('I enter member name {string}', async function (membername) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(membername);
});

When('I enter member email {string}', async function (memberemail) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(memberemail);
});

When('I click save new member', async function() {
    let element = await this.driver.$('button.gh-btn-primary');
    return await element.click();
})

Then('I click first member', async function () {
    let element = await this.driver.$('.gh-members-list-name');
    return await element.click();
});

When('I click save member', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
})

Then('I see member created', async function () {
    let elements = await this.driver.$$(".ember-view.gh-list-data");
    let memberwascreated = elements.length > 0;
    expect(memberwascreated).to.equal(true);
});

When('I click member settings', async function() {
    let element = await this.driver.$('button.gh-btn-action-icon');
    return await element.click();
})

When('I click delete member', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/ul/li[2]/button');
    return await element.click();
})

When('I click confirm delete member', async function() {
    let element = await this.driver.$('button.gh-btn-red');
    return await element.click();
})

When('I click leave', async function() {
    let element = await this.driver.$('/html/body/div[5]/div/div/div[2]/button[2]');
    return await element.click();
})

When('I enter excerpt {string}', async function (postexc) {
    let element = await this.driver.$('#custom-excerpt');
    return await element.setValue(postexc);
});

When('I click right now', async function() {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/div[3]/button');
    return await element.click();
})

Then('I click on schedule for later', async function () {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/div[3]/div/div/div/fieldset/div[1]/div[2]/label');
    return await element.click();
});

When('I enter post time {string}', async function (posttime) {
    let element = await this.driver.$('.gh-date-time-picker-time');
    return await element.setValue(posttime);
});

When('I click schedule post', async function() {
    let element = await this.driver.$('button.gh-btn-large');
    return await element.click();
})

When('I click your profile', async function() {
    let element = await this.driver.$('a[href="#/settings/staff/test/"]');
    return await element.click();
})

When('I enter location {string}', async function (location) {
    let element = await this.driver.$('#user-location');
    return await element.setValue(location);
});

When('I click save user changes', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view');
    return await element.click();
})

When('I click staff link', async function() {
    let element = await this.driver.$('a[href="#/settings/staff/"]');
    return await element.click();
})

When('I click sign out', async function() {
    let element = await this.driver.$('a[href="#/signout/"]');
    return await element.click();
})

Then('I click testpost', async function () {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/ol/li[2]/a[1]/h3');
    return await element.click();
});
