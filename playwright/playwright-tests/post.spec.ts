import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import data from '../data/data-priori.json';

test.describe.serial("Post E2E Scenarios", () => {
  const titlePostFaker = faker.lorem.sentence();
  const titlePostPriori = data[0]["title_post"];
  const titleRandomPool = data[randomIntFromInterval(1,999)].title_post;

    test.beforeEach(async ({ page }, testInfo) => {
      // Go to the starting url before each test.
      await page.goto("");
  
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Sign In - HyperS/);
      await page.screenshot({ path: `${testInfo.title}000.png` });
      // login in the admin panel
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Sign in →').click();
  
      // Expects the URL to contain dashboard.
      await expect(page).toHaveURL(/.*dashboard/);
      await page.goto('/ghost/#/posts');
      await page.screenshot({ path: `${testInfo.title}001.png` });
      // Expects to be in the creation of posts section
      await expect(page).toHaveTitle(/Posts - HyperS/);
    });
  
    test('Ramdon scenario: Create new post', async ({ page }, testInfo) => {
      // Write a new post option selected
      await page.locator('span',{hasText: 'New post'}).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Creation of post
      await page.getByPlaceholder('Post title').fill(titlePostFaker);
      await page.locator('[data-placeholder="Begin writing your post..."]').fill(faker.lorem.paragraph());
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.getByText('Publish').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      const reviewButton = page.locator('button', {hasText: 'Continue, final review →'});
      // Validate the option to validate post is visible
      await expect(reviewButton).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}005.png` });

      // Publishing post
      await reviewButton.click();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      await page.locator('button', {hasText: 'Publish post, right now'}).dispatchEvent('click')

      // Validate that the new post is pubished
      expect(page.getByText(titlePostFaker)).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}007.png` });
    });
  
    test('Random Scenario: Edit post', async ({ page }, testInfo) => {
      // Select a specific post to be edited
      await page.getByText(titlePostFaker).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Edition of post
      await page.getByPlaceholder('Post title').fill(titlePostFaker + "Hey hey");
      await page.locator('[data-placeholder="Begin writing your post..."]').fill(faker.lorem.paragraph())
      await page.screenshot({ path: `${testInfo.title}003.png` });
      const updateButton = page.locator('button', {hasText: 'Update'});
      await updateButton.click();
      await page.screenshot({ path: `${testInfo.title}004.png` });

      // Validate the edition was completed
      await expect(updateButton).toBeDisabled();
      
    });

    test('Random Scenario: Config settings post', async ({ page }, testInfo) => {
      // Select a specific post to edit config settings
      await page.getByText(titlePostFaker + "Hey hey").click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Config settings of post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('id=url').fill(faker.internet.url());
      await page.getByPlaceholder('YYYY-MM-DD').fill(faker.date.soon().toString());
      await page.locator('.input-toggle-component').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      // Navigate to the website to validate changes
      await page.goto('/my-favourite-post');
      // Validate the post is updated
      await expect(page).toHaveTitle(/HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      await page.locator('.gh-head-logo').click();
      // Validate that the post is featured
      expect(page.getByText('Featured')).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      
    });
  
    test('Random Scenario: Delete post', async ({ page }, testInfo) => {
      // Select a specific post to delete
      await page.getByText(titlePostFaker).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Delete post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('button', {hasText: 'Delete'}).click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await page.locator('.modal-footer>button',{hasText: 'Delete'}).click();
      // Confirm the right page to confirm the post is deleted
      await expect(page).toHaveTitle(/Posts - HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      const tablePosts = await page.locator('ol>li').count();
      // Validate the post is deleted
      expect(tablePosts).toEqual(1);
    });

    test('Data priori: Create new post', async ({ page }, testInfo) => {
      // Write a new post option selected
      await page.locator('span',{hasText: 'New post'}).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Creation of post
      await page.getByPlaceholder('Post title').fill(titlePostPriori);
      await page.locator('[data-placeholder="Begin writing your post..."]').fill(data[1].description_post);
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.getByText('Publish').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      const reviewButton = page.locator('button', {hasText: 'Continue, final review →'});
      // Validate the option to validate post is visible
      await expect(reviewButton).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}005.png` });

      // Publishing post
      await reviewButton.click();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      await page.locator('button', {hasText: 'Publish post, right now'}).dispatchEvent('click')

      // Validate that the new post is pubished
      expect(page.getByText(titlePostPriori)).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}007.png` });
    });
  
    test('Data priori: Edit post', async ({ page }, testInfo) => {
      // Select a specific post to be edited
      await page.getByText(titlePostPriori).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Edition of post
      await page.getByPlaceholder('Post title').fill(titlePostPriori + "Hey hey");
      await page.locator('[data-placeholder="Begin writing your post..."]').fill(data[0].description_post)
      await page.screenshot({ path: `${testInfo.title}003.png` });
      const updateButton = page.locator('button', {hasText: 'Update'});
      await updateButton.click();
      await page.screenshot({ path: `${testInfo.title}004.png` });

      // Validate the edition was completed
      await expect(updateButton).toBeDisabled();
      
    });

    test('Data priori: Config settings post', async ({ page }, testInfo) => {
      // Select a specific post to edit config settings
      await page.getByText(titlePostPriori + "Hey hey").click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Config settings of post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('id=url').fill(data[0]["url_Post"]);
      await page.getByPlaceholder('YYYY-MM-DD').fill(data[0]["date_post"]);
      await page.locator('.input-toggle-component').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      // Navigate to the website to validate changes
      await page.goto('/my-favourite-post');
      // Validate the post is updated
      await expect(page).toHaveTitle(/HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      await page.locator('.gh-head-logo').click();
      // Validate that the post is featured
      expect(page.getByText('Featured')).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      
    });
  
    test('Data priori: Delete post', async ({ page }, testInfo) => {
      // Select a specific post to delete
      await page.getByText(titlePostPriori).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Delete post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('button', {hasText: 'Delete'}).click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await page.locator('.modal-footer>button',{hasText: 'Delete'}).click();
      // Confirm the right page to confirm the post is deleted
      await expect(page).toHaveTitle(/Posts - HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      const tablePosts = await page.locator('ol>li').count();
      // Validate the post is deleted
      expect(tablePosts).toEqual(1);
    });

    test('Random Pool: Create new post', async ({ page }, testInfo) => {
      // Write a new post option selected
      await page.locator('span',{hasText: 'New post'}).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Creation of post
      await page.getByPlaceholder('Post title').fill(titleRandomPool);
      await page.locator('[data-placeholder="Begin writing your post..."]').fill(data[randomIntFromInterval(1,999)].description_post);
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.getByText('Publish').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      const reviewButton = page.locator('button', {hasText: 'Continue, final review →'});
      // Validate the option to validate post is visible
      await expect(reviewButton).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}005.png` });

      // Publishing post
      await reviewButton.click();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      await page.locator('button', {hasText: 'Publish post, right now'}).dispatchEvent('click')

      // Validate that the new post is pubished
      expect(page.getByText(titleRandomPool)).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}007.png` });
    });
  
    test('Random Pool: Edit post', async ({ page }, testInfo) => {
      // Select a specific post to be edited
      await page.getByText(titleRandomPool).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Edition of post
      await page.getByPlaceholder('Post title').fill(titleRandomPool + "Hey hey");
      await page.locator('[data-placeholder="Begin writing your post..."]').fill(data[randomIntFromInterval(1,999)].description_post)
      await page.screenshot({ path: `${testInfo.title}003.png` });
      const updateButton = page.locator('button', {hasText: 'Update'});
      await updateButton.click();
      await page.screenshot({ path: `${testInfo.title}004.png` });

      // Validate the edition was completed
      await expect(updateButton).toBeDisabled();
      
    });

    test('Random Pool: Config settings post', async ({ page }, testInfo) => {
      // Select a specific post to edit config settings
      await page.getByText(titleRandomPool + "Hey hey").click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Config settings of post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('id=url').fill(data[randomIntFromInterval(1,999)]["url_Post"]);
      await page.getByPlaceholder('YYYY-MM-DD').fill(data[randomIntFromInterval(1,999)]["date_post"]);
      await page.locator('.input-toggle-component').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      // Navigate to the website to validate changes
      await page.goto('/my-favourite-post');
      // Validate the post is updated
      await expect(page).toHaveTitle(/HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      await page.locator('.gh-head-logo').click();
      // Validate that the post is featured
      expect(page.getByText('Featured')).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      
    });
  
    test('Random Pool: Delete post', async ({ page }, testInfo) => {
      // Select a specific post to delete
      await page.getByText(titleRandomPool).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Delete post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('button', {hasText: 'Delete'}).click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await page.locator('.modal-footer>button',{hasText: 'Delete'}).click();
      // Confirm the right page to confirm the post is deleted
      await expect(page).toHaveTitle(/Posts - HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      const tablePosts = await page.locator('ol>li').count();
      // Validate the post is deleted
      expect(tablePosts).toEqual(1);
    });


  
    test('Create a scheduled post', async ({ page }, testInfo) => {
      // Create a post to schedule
      await page.locator('span',{hasText: 'Write a new post'}).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Creation of post
      await page.getByPlaceholder('Post title').fill('This is a new scheduled post');
      await page.locator('[data-placeholder="Begin writing your post..."]').fill('Once upon a time a scheduled post...')
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.getByText('Publish').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await page.getByText('Right now').click();
      await page.getByText('Schedule for later').click();
      await page.screenshot({ path: `${testInfo.title}005.png` });
      await page.getByPlaceholder('YYYY-MM-DD').fill('2022-11-25');
      const reviewButton = page.locator('button', {hasText: 'Continue, final review →'});

      // Validate the review button is enable
      await expect(reviewButton).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      // Publishing post
      await reviewButton.click();
      await page.screenshot({ path: `${testInfo.title}007.png` });
      await page.locator('button', {hasText: 'Publish post, on November 25th'}).dispatchEvent('click')
      // Validate the post has been published
      await expect(page.locator('.green', {hasText:'All set!'})).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}008.png` });
      // Navigate to the scheduled view
      await page.goto('/ghost/#/posts?type=scheduled');
      await page.screenshot({ path: `${testInfo.title}009.png` });
      // Validate the post is in the scheduled table
      const tablePosts = await page.locator('ol>li').count();
      expect(tablePosts).toEqual(1);
    });

    test.afterAll(async ({ page }) => {
      page.close();
    });
  
  });

  function randomIntFromInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }