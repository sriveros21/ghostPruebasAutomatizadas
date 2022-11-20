import { expect, test } from '@playwright/test';

test.describe.serial("Tag E2E Scenarios", () => {
    test.beforeEach(async ({ page }, testInfo) => {
        // Go to the starting url before each test.
        await page.goto("");

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}000.png` });
        // create a locator
        await page.locator('id=ember6').fill('js.arangom1@uniandes.edu.co');
        await page.locator('id=ember8').fill('qwerty12345');
        await page.getByText('Sign in →').click();

        // Expects the URL to contain dashboard.
        await expect(page).toHaveURL(/.*dashboard/);
        await page.goto('/ghost/#/tags');
        await page.screenshot({ path: `${testInfo.title}001.png` });
        // Expects to be in the creation of tag section
        await expect(page).toHaveTitle(/Tags - Pruebas Automatizadas/);
    });

    test('Create a new tag', async ({ page }, testInfo) => {
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });
        // Creation of new tag
        await page.locator('id=tag-name').fill('Pais');
        await page.locator('id=tag-description').fill('Colombia');
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
    })

    test('Edit a tag', async ({ page }, testInfo) => {
        await page.getByText('Colombia').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill('Country');
        await page.locator('id=tag-description').fill('Colombia');
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
    });

    test('Delete a tag', async ({ page }, testInfo) => {
        await page.getByText('Colombia').click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete a tag
        await page.locator('.gh-btn', { hasText: 'Delete tag' }).click();
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon.ember-view', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
    });

    test.afterAll(async ({ page }) => {
        page.close();
    });
});
