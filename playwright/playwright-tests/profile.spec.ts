import { test, expect } from '@playwright/test';

test.describe.serial("Profile E2E Scenario", () => {
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
      await page.screenshot({ path: `${testInfo.title}001.png` });
    });
  
    test('Edit profile', async ({ page }, testInfo) => {
  
      await page.goto('/ghost/#/settings/staff/sriveros7');
    
      // Expects to be in the staff section
      await expect(page).toHaveTitle(/Staff - User - HyperS/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Edition of profile
      await page.locator('id=user-name').fill('Sergio Andres');
      await page.locator('id=user-slug').fill('Sriveros7');
      await page.locator('id=user-location').fill('Colombia');
      await page.locator('id=user-website').fill('www.mokanacolombia.com');
      await page.locator('id=user-bio').fill('Me gustan los deportes extremos y viajar :D ');
      await page.screenshot({ path: `${testInfo.title}003.png` });
      await page.getByText('Save').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await page.goto('/author/sriveros7/');
      await expect(page).toHaveTitle(/HyperS/);
      await page.screenshot({ path: `${testInfo.title}005.png` });
      await page.goto('/ghost/#/settings/staff/sriveros7');
      await page.screenshot({ path: `${testInfo.title}006.png` });
      await page.locator('id=user-slug').fill('Sergio');
      await page.getByText('Save').click();
      await page.screenshot({ path: `${testInfo.title}007.png` });
    });

    test.afterAll(async ({ page }) => {
        page.close();
      });
});