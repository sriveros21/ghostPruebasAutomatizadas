import { test, expect } from '@playwright/test';

test.describe.serial("Post E2E Scenarios", () => {
    test.beforeEach(async ({ page }, testInfo) => {
      // Go to the starting url before each test.
      await page.goto("");
  
      // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);
      await page.screenshot({ path: `${testInfo.title}000.png` });
      // login in the admin panel
      await page.locator('id=ember8').fill('js.arangom1@uniandes.edu.co');
      await page.locator('id=ember10').fill('qwerty12345');
      await page.getByText('Sign in').click();
  
      // Expects the URL 
      await expect(page).toHaveURL("http://localhost:3001/ghost/#/site");
      await page.screenshot({ path: `${testInfo.title}001.png` });
    });
  
    test('Sign out', async ({ page }, testInfo) => {
      // Sign out from the app
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();

      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Login with bad credentials
      await page.locator('id=ember8').fill('sr@35.com');
      await page.locator('id=ember10').fill('3102');
      await page.getByText('Sign in').click();
      const errorLogin = await page.getByText("There is no user with that email address.").textContent();
      expect(errorLogin).toContain("There is no user");
      await page.screenshot({ path: `${testInfo.title}003.png` });
      // Login with correct credentials
      await page.locator('id=ember8').fill('js.arangom1@uniandes.edu.co');
      await page.locator('id=ember10').fill('qwerty12345');
      await page.getByText('Retry').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(page).toHaveURL("http://localhost:3001/ghost/#/site");
    });

    test.afterAll(async ({ page }) => {
        page.close();
      });
});