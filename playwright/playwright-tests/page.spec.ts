import { expect, test } from '@playwright/test';

test.describe.serial("Page E2E Scenarios", () => {
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
        await page.goto('/ghost/#/pages');

        // Expects to be in the creation of page section
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
    });

    test('Create a new page', async ({ page }) => {
        await page.getByText('Create a new page').click();
        const breadcrumb = await page.locator('.ember-view.gh-btn-editor.gh-editor-back-button').textContent();
        expect(breadcrumb).toContain("Pages");

        // Creation of new page
        await page.locator('.gh-editor-title.ember-text-area.gh-input.ember-view').fill('Pais');
        await page.locator('.koenig-editor__editor.__mobiledoc-editor').fill('Colombia');
        await page.getByText('Publish').click();
        await page.getByText('Continue, final review →').click();
        await page.locator('.gh-btn', { hasText: 'Publish page, right now' }).click({ force: true });
    })

    test('Edit a page', async ({ page }) => {
        await page.getByText('Pais').click();
        const breadcrumb = await page.locator('.gh-editor-post-status').textContent();
        expect(breadcrumb).toContain("Published");

        // Edition of a page
        await page.locator('.gh-editor-title.ember-text-area.gh-input.ember-view').fill('Pais');
        await page.locator('.koenig-editor__editor.__mobiledoc-editor').fill('Inglaterra');
        await page.getByText('Update').click();
    });

    test('Config settings page', async ({ page }) => {
        await page.getByText('Pais').click();
        const breadcrumb = await page.locator('.gh-editor-post-status').textContent();
        expect(breadcrumb).toContain("Published");

        // Config settings of page
        await page.locator('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
        await page.locator('id=url').fill('pais');
        await page.getByPlaceholder('YYYY-MM-DD').fill('2022-11-11');
        await page.locator('.input-toggle-component').click();
    });

    test('Delete a page', async ({ page }) => {
        await page.getByText('Pais').click();
        const breadcrumb = await page.locator('.gh-editor-post-status').textContent();
        expect(breadcrumb).toContain("Published");

        // Delete a page
        await page.locator('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
        await page.locator('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button', { hasText: 'Delete' }).click();
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon.ember-view', { hasText: 'Delete' }).click();
    });

    test.afterAll(async ({ page }) => {
        page.close();
    });
});