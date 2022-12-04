const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/section/form/div[1]/span/input');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div/div/section/form/div[2]/span/input');
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

// -----------------------------------

When('I click userpic', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]');
    return await element.click();
})

When('I click signout', async function() {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');
    return await element.click();
})

When('I click new post', async function() {
    let element = await this.driver.$('a[href="#/editor/post/"]');
    return await element.click();
})

When('I enter post title {string}', async function (posttitle) {
    let element = await this.driver.$('textarea');
    return await element.setValue(posttitle);
});

When('I enter random post title {kraken-string}', async function (posttitle) {
    let element = await this.driver.$('textarea');
    return await element.setValue(posttitle);
});

When('I enter post description {string}', async function (postdescription) {
    let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
    return await element.setValue(postdescription);
});

When('I enter random post description {kraken-string}', async function (postdescription) {
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
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[2]/a[1]');
    return await element.click();
})

Then('I click first post', async function () {
    let element = await this.driver.$('.gh-posts-list-item');
    return await element.click();
});

Then('I click edit post', async function () {
    let element = await this.driver.$("/html/body/div[2]/div/main/section/div[1]/header/div/div[2]/a/span");
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

// Then('I see member created', async function () {
//     let elements = await this.driver.$$(".ember-view.gh-list-data");
//     let memberwascreated = elements.length > 0;
//     expect(memberwascreated).to.equal(true);
// });

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
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/div[3]/div/div/div/fieldset/div[2]/div[2]/input');
    return await element.setValue(posttime);
});

When('I enter random post time {kraken-string}', async function (posttime) {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/div[3]/div/div/div/fieldset/div[2]/div[2]/input');
    return await element.setValue(posttime);
});

When('I enter page time {string}', async function (posttime) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/div[2]/div/div[2]/input');
    return await element.setValue(posttime);
});

When('I enter page date {string}', async function (postdate) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/div[2]/div/div[1]/div/div[1]/div/input');
    return await element.setValue(postdate);
});

When('I enter post date {string}', async function (postdate) {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/div[3]/div/div/div/fieldset/div[2]/div[1]/div[1]/div/input');
    return await element.setValue(postdate);
});

When('I enter page url {string}', async function (postdate) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/div[1]/div/input');
    return await element.setValue(postdate);
});


When('I click schedule post', async function() {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/button[1]/span');
    return await element.click();
})

When('I click your profile', async function() {
    let element = await this.driver.$('/html/body/div[1]/div/ul/li[4]/a');
    return await element.click();
})

When('I enter location {string}', async function (location) {
    let element = await this.driver.$('#user-location');
    return await element.setValue(location);
});

When('I click save user changes', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/button/span');
    return await element.click();
})

When('I click staff link', async function() {
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/div/div/a[2]');
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

//Steps Escenarios Data


When('I enter a random name as member name {kraken-string}', async function (membername) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(membername);
});

When('I enter a random email as member email {kraken-string}', async function (memberemail) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(memberemail);
});

When('I enter a number as member name {kraken-string}', async function (membername) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(membername);
});

When('I enter a number as member email {kraken-string}', async function (memberemail) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(memberemail);
});

When('I enter an email as location {kraken-string}', async function (location) {
    let element = await this.driver.$('#user-location');
    return await element.setValue(location);
});

When('I enter numbers in name field {kraken-string}', async function (name) {
    let element = await this.driver.$('#user-name');
    return await element.setValue(name);
});

When('I enter numbers in email field {kraken-string}', async function (email) {
    let element = await this.driver.$('#user-email');
    return await element.setValue(email);
});

When('I enter an email in facebook profile field {kraken-string}', async function (facebook) {
    let element = await this.driver.$('#user-facebook');
    return await element.setValue(facebook);
});

When('I enter an email in twitter profile field {kraken-string}', async function (twiter) {
    let element = await this.driver.$('#user-twitter');
    return await element.setValue(twiter);
});

When('I enter numbers in website field {kraken-string}', async function (website) {
    let element = await this.driver.$('#user-website');
    return await element.setValue(website);
});

When('I enter member note {string}', async function (note) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(note);
});

When('I enter user name {string}', async function (name) {
    let element = await this.driver.$('#user-name');
    return await element.setValue(name);
});

When('I enter user email {string}', async function (email) {
    let element = await this.driver.$('#user-email');
    return await element.setValue(email);
});

When('I enter bio {string}', async function (bio) {
    let element = await this.driver.$('#user-bio');
    return await element.setValue(bio);
});

When('I enter a random page time {kraken-string}', async function (posttime) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/div[2]/div/div[2]/input');
    return await element.setValue(posttime);
});

When('I enter a random page date {kraken-string}', async function (postdate) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/div[2]/div/div[1]/div/div[1]/div/input');
    return await element.setValue(postdate);
});

When('I enter a random post date {kraken-string}', async function (postdate) {
    let element = await this.driver.$('/html/body/div[4]/div/div/div/div[2]/div[3]/div/div/div/fieldset/div[2]/div[1]/div[1]/div/input');
    return await element.setValue(postdate);
});

When('I enter a random page url {kraken-string}', async function (postdate) {
    let element = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div/div[2]/form/div[1]/div/input');
    return await element.setValue(postdate);
});

