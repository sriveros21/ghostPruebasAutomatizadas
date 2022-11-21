import { test, expect } from '@playwright/test';


test.describe.serial("Member E2E Scenarios", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    // Go to the starting url before each test.
    await page.goto("");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);
    await page.screenshot({ path: `${testInfo.title}000.png` });
    // Login into the app
    await page.locator('id=ember8').fill('js.arangom1@uniandes.edu.co');
    await page.locator('id=ember10').fill('qwerty12345');
    await page.getByText('Sign in').click();

    // Expects the URL to contain dashboard.
    await expect(page).toHaveURL("http://localhost:3001/ghost/#/site");
    await page.goto('/ghost/#/members');
    await page.screenshot({ path: `${testInfo.title}001.png` });
    // Expects to be in the creation of member section
    await expect(page).toHaveTitle(/Members - Pruebas Automatizadas/);
  });

  test('Create a new member', async ({ page }, testInfo) => {
    // Select option to create a new member
    await page.getByText('New member').click();
    const breadcrumb = await page.locator('.gh-canvas-title').textContent();

    // Validate you are in the right location
    expect (breadcrumb).toContain("New member");
    await page.screenshot({ path: `${testInfo.title}002.png` });
    // Creation of new member
    await page.locator('id=member-name').fill('Sergio');
    await page.locator('id=member-email').fill('ar32@gmail.com');
    await page.locator('.ember-power-select-trigger-multiple-input').fill('new');
    const newsletterToggle = page.locator('.input-toggle-component');
    await page.screenshot({ path: `${testInfo.title}003.png` });
    if (await newsletterToggle.isChecked() != true)
      newsletterToggle.check();
    await page.getByText('Save').click();
    // Validate the member is created
    expect(await page.locator('.gh-member-details-identity').textContent()).toContain('ar32@gmail.com');
    await page.screenshot({ path: `${testInfo.title}004.png` });
  });

  test.afterAll(async ({ page }) => {
    page.close();
  });

});

