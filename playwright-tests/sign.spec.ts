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
    });
  
    test('Sign out', async ({ page }) => {
  
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();
    
      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
    
      // Login with bad credentials
      await page.locator('id=ember6').fill('sr@35.com');
      await page.locator('id=ember8').fill('3102');
      await page.getByText('Sign in →').click();
      const errorLogin = await page.getByText("There is no user with that email address.").textContent();
      expect(errorLogin).toContain("There is no user");

      // Login with correct credentials
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Retry').click();

      await expect(page).toHaveURL(/.*dashboard/);
    });

    test.afterAll(async ({ page }) => {
        page.close();
      });
});