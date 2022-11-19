import { test, expect } from '@playwright/test';

test.describe.serial("Profile E2E Scenario", () => {
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
  
    test('Edit profile', async ({ page }) => {
  
      await page.goto('/ghost/#/settings/staff/sriveros7');
    
      // Expects to be in the staff section
      await expect(page).toHaveTitle(/Staff - User - HyperS/);
    
      // Edition of profile
      await page.locator('id=user-name').fill('Sergio Andres');
      await page.locator('id=user-slug').fill('Sriveros7');
      await page.locator('id=user-location').fill('Colombia');
      await page.locator('id=user-website').fill('www.mokanacolombia.com');
      await page.locator('id=user-bio').fill('Me gustan los deportes extremos y viajar :D ');
      await page.getByText('Save').click();

      await page.goto('/author/sriveros7/');
      await expect(page).toHaveTitle(/HyperS/);

      await page.goto('/ghost/#/settings/staff/sriveros7');
      await page.locator('id=user-slug').fill('Sergio');
      await page.getByText('Save').click();
    });

    test.afterAll(async ({ page }) => {
        page.close();
      });
});