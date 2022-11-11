import { expect, test } from '@playwright/test';

test.describe.serial("Integration E2E Scenarios", () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto("");

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);

        // create a locator
        await page.locator('id=ember6').fill('js.arangom1@uniandes.edu.co');
        await page.locator('id=ember8').fill('qwerty12345');
        await page.getByText('Sign in →').click();

        // Expects the URL to contain dashboard.
        await expect(page).toHaveURL(/.*dashboard/);
        await page.goto('/ghost/#/settings/integrations');

        // Expects to be in the creation of page section
        await expect(page).toHaveTitle(/Settings - Integrations - Pruebas Automatizadas/);
    });

    test('Create a new integration', async ({ page }) => {
        await page.getByText(' Add custom integration').click();
        const breadcrumb = await page.locator('.modal-header').textContent();
        expect(breadcrumb).toContain("New custom integration");

        // Creation of new tag
        await page.locator('id=new-integration-name').fill('Pais');
        await page.locator('.gh-btn', { hasText: 'Create' }).click();
    })

    test('Edit a integration', async ({ page }) => {
        await page.getByText('Pais').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit integration");

        // Edition of a tag
        await page.locator('id=integration_name').fill('Country');
        await page.locator('id=integration_description').fill('Colombia');
        await page.getByText('Save').click();
    });

    test('Delete a integration', async ({ page }) => {
        await page.getByText('Country').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit integration");

        // Delete a tag
        await page.locator('.gh-btn', { hasText: ' Delete integration ' }).click();
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon.ember-view', { hasText: 'Delete Integration' }).click();
    });
});