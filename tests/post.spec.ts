import { test, expect } from '@playwright/test';

test.describe.serial("Post E2E Scenarios", () => {
    test.beforeEach(async ({ page }) => {
      // Go to the starting url before each test.
      await page.goto("");
  
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Sign In - HyperS/);
  
      // login in the admin panel
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Sign in →').click();
  
      // Expects the URL to contain dashboard.
      await expect(page).toHaveURL(/.*dashboard/);
      await page.goto('/ghost/#/posts');
    
      // Expects to be in the creation of posts section
      await expect(page).toHaveTitle(/Posts - HyperS/);
    });
  
    test('Create new post', async ({ page }) => {
  
      await page.locator('span',{hasText: 'New post'}).click();
      await expect(page).toHaveURL(/.*editor/);
    
      // Creation of post
      await page.getByPlaceholder('Post title').fill('This is a new post');
      await page.locator('[data-placeholder="Begin writing your post..."]').fill('Once upon a time...')
      await page.getByText('Publish').click();
      const reviewButton = page.locator('button', {hasText: 'Continue, final review →'});
      await expect(reviewButton).toBeVisible();

      // Publishing post
      await reviewButton.click();
      await page.locator('button', {hasText: 'Publish post, right now'}).dispatchEvent('click')
      expect(page.getByText('Publish post, right now')).toBeVisible();
    });
  
    test('Edit post', async ({ page }) => {
        
      await page.getByText('This is a new post').click();
      await expect(page).toHaveURL(/.*editor/);

      // Edition of post
      await page.getByPlaceholder('Post title').fill('This is a edition of the post');
      await page.locator('[data-placeholder="Begin writing your post..."]').fill('Once upon a time I was on the forest looking for a new adventure...')
      const updateButton = page.locator('button', {hasText: 'Update'});
      await updateButton.click();

      await expect(updateButton).toBeDisabled();
      
    });
  
    test('Delete post', async ({ page }) => {
    
      await page.getByText('This is a edition of the post').click();
      await expect(page).toHaveURL(/.*editor/);

      // Delete post
      await page.getByTitle('Settings').click();
      await page.locator('button', {hasText: 'Delete'}).click();
      await page.getByRole('button',{name:'Delete'}).click();
      await expect(page).toHaveTitle(/Posts - HyperS/);

      const tablePosts = await page.locator('ol>li').count();
      expect(tablePosts).toEqual(2);
    });
  
    test.afterAll(async ({ page }) => {
      page.close();
    });
  
  });