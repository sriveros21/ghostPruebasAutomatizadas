import { test, expect } from '@playwright/test';


test.describe.serial("Member E2E Scenarios", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Sign In - HyperS/);

    // create a locator
    await page.locator('id=ember6').fill('sr@34.com');
    await page.locator('id=ember8').fill('3102326449');
    await page.getByText('Sign in →').click();

    // Expects the URL to contain dashboard.
    await expect(page).toHaveURL(/.*dashboard/);
    await page.goto('/ghost/#/members');
  
    // Expects to be in the creation of member section
    await expect(page).toHaveTitle(/Members - HyperS/);
  });

  test('Create a new member', async ({ page }) => {

    await page.getByText('New member').click();
    const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
    expect (breadcrumb).toContain("New member");
  
    // Creation of new member
    await page.locator('id=member-name').fill('Sergio');
    await page.locator('id=member-email').fill('ar32@gmail.com');
    await page.locator('.ember-power-select-trigger-multiple-input').fill('new');
    const newsletterToggle = page.locator('.input-toggle-component');
    if (await newsletterToggle.isChecked() != true)
      newsletterToggle.check();
    await page.getByText('Save').click();
    expect(await page.locator('.gh-member-details-identity').textContent()).toContain('ar32@gmail.com');
  });

  test('Edit a member', async ({ page }) => {
  
    await page.getByText('ar32@gmail.com').click();
    const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
    expect (breadcrumb).toContain("Edit member");
  
    // Edition of a member
    await page.locator('id=member-name').fill('Joselin');
    await page.locator('id=member-email').fill('Joselin@gmail.com');
    await page.locator('.ember-power-select-trigger-multiple-input').fill('updated');
    const newsletterToggle = page.locator('.input-toggle-component');
    if (await newsletterToggle.isChecked() != true)
      newsletterToggle.check();
    await page.getByText('Save').click();
    expect(await page.locator('.gh-member-details-identity').textContent()).toContain('Joselin@gmail.com');
  });

  test('Delete a member', async ({ page }) => {
  
    await page.getByText('Joselin@gmail.com').click();
    const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
    expect (breadcrumb).toContain("Edit member");
  
    // Delete a member
    await page.locator('(//button)[3]').click();
    await page.locator('.red').click();
    await page.locator('.gh-btn', {hasText:'Delete member'}).click();
    const tableMembers = page.locator('tbody tr');
    expect(await tableMembers.count()).toEqual(0);
  });

  test.afterAll(async ({ page }) => {
    page.close();
  });

});

