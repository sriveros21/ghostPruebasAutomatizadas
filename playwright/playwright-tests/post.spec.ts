import { test, expect } from '@playwright/test';

test.describe.serial("Post E2E Scenarios", () => {
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
  
    test('Create new post', async ({ page }, testInfo) => {
  
      await page.locator('span',{hasText: 'New post'}).click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Creation of post
      await page.getByPlaceholder('Post title').fill('This is a new post');
      await page.locator('[data-placeholder="Begin writing your post..."]').fill('Once upon a time...')
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.getByText('Publish').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      const reviewButton = page.locator('button', {hasText: 'Continue, final review →'});
      await expect(reviewButton).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}005.png` });

      // Publishing post
      await reviewButton.click();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      await page.locator('button', {hasText: 'Publish post, right now'}).dispatchEvent('click')
      expect(page.getByText('This is a new post')).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}007.png` });
    });
  
    test('Edit post', async ({ page }, testInfo) => {
        
      await page.getByText('This is a new post').click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Edition of post
      await page.getByPlaceholder('Post title').fill('This is a edition of the post');
      await page.locator('[data-placeholder="Begin writing your post..."]').fill('Once upon a time I was on the forest looking for a new adventure...')
      await page.screenshot({ path: `${testInfo.title}003.png` });
      const updateButton = page.locator('button', {hasText: 'Update'});
      await updateButton.click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(updateButton).toBeDisabled();
      
    });

    test('Config settings post', async ({ page }, testInfo) => {
        
      await page.getByText('This is a edition of the post').click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Config settings of post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('id=url').fill('my-favourite-post');
      await page.getByPlaceholder('YYYY-MM-DD').fill('2022-11-10');
      await page.locator('.input-toggle-component').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await page.goto('/my-favourite-post');
      await expect(page).toHaveTitle(/This is a edition of the post/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      await page.locator('.gh-head-logo').click();
      expect(page.getByText('Featured')).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      
    });
  
    test('Delete post', async ({ page }, testInfo) => {
    
      await page.getByText('This is a edition of the post').click();
      await expect(page).toHaveURL(/.*editor/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Delete post
      await page.getByTitle('Settings').click();
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.locator('button', {hasText: 'Delete'}).click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await page.getByRole('button',{name:'Delete'}).click();
      await expect(page).toHaveTitle(/Posts - HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      const tablePosts = await page.locator('ol>li').count();
      expect(tablePosts).toEqual(2);
    });
  
    test('Create a scheduled post', async ({ page }, testInfo) => {
    
      await page.locator('span',{hasText: 'New post'}).click();
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
      await expect(reviewButton).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}006.png` });
      // Publishing post
      await reviewButton.click();
      await page.screenshot({ path: `${testInfo.title}007.png` });
      await page.locator('button', {hasText: 'Publish post, on November 25th'}).dispatchEvent('click')
      await expect(page.locator('.green', {hasText:'All set!'})).toBeVisible();
      await page.screenshot({ path: `${testInfo.title}008.png` });
      await page.goto('/ghost/#/posts?type=scheduled');
      await page.screenshot({ path: `${testInfo.title}009.png` });
      const tablePosts = await page.locator('ol>li').count();
      expect(tablePosts).toEqual(1);
    });

    test.afterAll(async ({ page }) => {
      page.close();
    });
  
  });