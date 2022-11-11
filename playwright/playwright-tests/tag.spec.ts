import { expect, test } from '@playwright/test';

test.describe.serial("Tag E2E Scenarios", () => {
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
        await page.goto('/ghost/#/tags');

        // Expects to be in the creation of tag section
        await expect(page).toHaveTitle(/Tags - Pruebas Automatizadas/);
    });

    test('Create a new tag', async ({ page }) => {
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("New tag");

        // Creation of new tag
        await page.locator('id=tag-name').fill('Pais');
        await page.locator('id=tag-description').fill('Colombia');
        await page.getByText('Save').click();
    })

    test('Edit a tag', async ({ page }) => {
        await page.getByText('Colombia').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");

        // Edition of a tag
        await page.locator('id=tag-name').fill('Country');
        await page.locator('id=tag-description').fill('Colombia');
        await page.getByText('Save').click();
    });

    test('Delete a tag', async ({ page }) => {
        await page.getByText('Colombia').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");

        // Delete a tag
        await page.locator('.gh-btn', { hasText: 'Delete tag' }).click();
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon.ember-view', { hasText: 'Delete' }).click();
    });

    test.afterAll(async ({ page }) => {
        page.close();
    });
});
