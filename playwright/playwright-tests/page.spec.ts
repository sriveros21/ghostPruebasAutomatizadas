import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import data from '../data/data-page.json';

test.describe.serial("Page E2E Scenarios", () => {
    const titlePagePriori = data[0]['title_page'];
    const titlePagePseudoRandom = data[randomIntFromInterval(1, 999)].title_page;
    const titlePageFullRandom = faker.lorem.sentence();

    test.beforeEach(async ({ page }, testInfo) => {
        // Go to the starting url before each test.
        await page.goto("");

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Sign In - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}000.png` });

        // Login in the app
        await page.locator('id=ember6').fill('js.arangom1@uniandes.edu.co');
        await page.locator('id=ember8').fill('qwerty12345');
        await page.getByText('Sign in →').click();

        // Expects the URL to contain dashboard.
        await page.waitForTimeout(10);
        await expect(page).toHaveURL(/.*dashboard/);
        await page.goto('/ghost/#/pages');
        await page.screenshot({ path: `${testInfo.title}001.png` });

        // Expects to be in the creation of page section
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
    });

    // BEGIN ------ DATA POOL A-PRIORI ------
    test('01 Data a-priori: Create a new page', async ({ page }, testInfo) => {
        // Write a new page option selected
        await page.locator('span', { hasText: 'Create a new page' }).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of page
        await page.getByPlaceholder('Page title').fill(titlePagePriori);
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(data[1].description_page);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Publish').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const reviewButton = page.locator('button', { hasText: 'Continue, final review →' });

        // Validate the option to validate page is visible
        await expect(reviewButton).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });

        // Publishing page
        await reviewButton.click();
        await page.screenshot({ path: `${testInfo.title}006.png` });
        await page.locator('button', { hasText: 'Publish page, right now' }).dispatchEvent('click')

        // Validate that the new page is pubished
        expect(page.getByText(titlePagePriori)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}007.png` });
    })

    test('02 Data a-priori: Edit a page', async ({ page }, testInfo) => {
        // Select a specific page to be edited
        await page.getByText(titlePagePriori).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of page
        await page.getByPlaceholder('Page title').fill(titlePagePriori + "...to be continue");
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(data[0].description_page)
        await page.screenshot({ path: `${testInfo.title}003.png` });
        const updateButton = page.locator('button', { hasText: 'Update' });
        await updateButton.click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate the edition was completed
        await expect(updateButton).toBeDisabled();
    });

    test('03 Data a-priori: Delete a page', async ({ page }, testInfo) => {
        // Select a specific page to delete
        await page.getByText(titlePagePriori).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete page
        await page.getByTitle('Settings').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();

        // Confirm the right page to confirm the page is deleted
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}005.png` });
        const tablePages = await page.locator('ol>li').count();

        // Validate the page is deleted
        expect(tablePages).toEqual(1);
    });

    test('04 Data a-priori: Create new page without title', async ({ page }, testInfo) => {
        // Write a new page option selected
        await page.locator('span', { hasText: 'Create a new page' }).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of page
        await page.getByPlaceholder('Page title').fill("");
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(data[1].description_page);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Publish').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const reviewButton = page.locator('button', { hasText: 'Continue, final review →' });

        // Validate the option to validate page is visible
        await expect(reviewButton).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });

        // Publishing page
        await reviewButton.click();
        await page.screenshot({ path: `${testInfo.title}006.png` });
        await page.locator('button', { hasText: 'Publish page, right now' }).dispatchEvent('click')

        // Validate that the new page is pubished
        expect(page.getByText("(Untitled)")).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}007.png` });
    });

    test('05 Data a-priori: Delete page without title', async ({ page }, testInfo) => {
        // Select a specific page to delete
        await page.getByText("(Untitled)").click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete page
        await page.getByTitle('Settings').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();

        // Confirm the right page to confirm the page is deleted
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}005.png` });
        const tablePages = await page.locator('ol>li').count();

        // Validate the page is deleted
        expect(tablePages).toEqual(1);
    });
    // END ------ DATA POOL A-PRIORI ------

    // BEGIN ------ DATA POOL PSEUDO RANDOM ------
    test('06 Pseudo random: Create new page', async ({ page }, testInfo) => {
        // Write a new page option selected
        await page.locator('span', { hasText: 'Create a new page' }).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of page
        await page.getByPlaceholder('Page title').fill(titlePagePseudoRandom);
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(data[randomIntFromInterval(1, 999)].description_page);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Publish').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const reviewButton = page.locator('button', { hasText: 'Continue, final review →' });
        // Validate the option to validate page is visible
        await expect(reviewButton).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });

        // Publishing page
        await reviewButton.click();
        await page.screenshot({ path: `${testInfo.title}006.png` });
        await page.locator('button', { hasText: 'Publish page, right now' }).dispatchEvent('click')

        // Validate that the new page is pubished
        expect(page.getByText(titlePagePseudoRandom)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}007.png` });
    });

    test('07 Pseudo random: Edit page', async ({ page }, testInfo) => {
        // Select a specific page to be edited
        await page.getByText(titlePagePseudoRandom).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of page
        await page.getByPlaceholder('Page title').fill(titlePagePseudoRandom + "...to be continue");
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(data[randomIntFromInterval(1, 999)].description_page)
        await page.screenshot({ path: `${testInfo.title}003.png` });
        const updateButton = page.locator('button', { hasText: 'Update' });
        await updateButton.click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate the edition was completed
        await expect(updateButton).toBeDisabled();
    });

    test('08 Pseudo random: Delete a page', async ({ page }, testInfo) => {
        // Select a specific page to delete
        await page.getByText(titlePagePseudoRandom).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete page
        await page.getByTitle('Settings').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();

        // Confirm the right page to confirm the page is deleted
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}005.png` });
        const tablePages = await page.locator('ol>li').count();

        // Validate the page is deleted
        expect(tablePages).toEqual(1);
    });

    test('09 Pseudo random: Create new page without title', async ({ page }, testInfo) => {
        // Write a new page option selected
        await page.locator('span', { hasText: 'Create a new page' }).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of page
        await page.getByPlaceholder('Page title').fill("");
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(data[randomIntFromInterval(1, 999)].description_page);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Publish').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const reviewButton = page.locator('button', { hasText: 'Continue, final review →' });

        // Validate the option to validate page is visible
        await expect(reviewButton).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });

        // Publishing page
        await reviewButton.click();
        await page.screenshot({ path: `${testInfo.title}006.png` });
        await page.locator('button', { hasText: 'Publish page, right now' }).dispatchEvent('click')

        // Validate that the new page is pubished
        expect(page.getByText("(Untitled)")).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}007.png` });
    });

    test('10 Pseudo random: Delete page without title', async ({ page }, testInfo) => {
        // Select a specific page to delete
        await page.getByText("(Untitled)").click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete page
        await page.getByTitle('Settings').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();

        // Confirm the right page to confirm the page is deleted
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}005.png` });
        const tablePages = await page.locator('ol>li').count();

        // Validate the page is deleted
        expect(tablePages).toEqual(1);
    });
    // END ------ DATA POOL PSEUDO RANDOM ------

    // BEGIN ------ DATA FULL RANDOM ------
    test('11 Full random: Create new page', async ({ page }, testInfo) => {
        // Write a new page option selected
        await page.locator('span', { hasText: 'Create a new page' }).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of page
        await page.getByPlaceholder('Page title').fill(titlePageFullRandom);
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(faker.lorem.paragraph());
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Publish').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const reviewButton = page.locator('button', { hasText: 'Continue, final review →' });

        // Validate the option to validate page is visible
        await expect(reviewButton).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });

        // Publishing page
        await reviewButton.click();
        await page.screenshot({ path: `${testInfo.title}006.png` });
        await page.locator('button', { hasText: 'Publish page, right now' }).dispatchEvent('click')

        // Validate that the new page is pubished
        expect(page.getByText(titlePageFullRandom)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}007.png` });
    });

    test('12 Full random: Edit page', async ({ page }, testInfo) => {
        // Select a specific page to be edited
        await page.getByText(titlePageFullRandom).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of page
        await page.getByPlaceholder('Page title').fill(titlePageFullRandom + "...to be continue");
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(faker.lorem.paragraph())
        await page.screenshot({ path: `${testInfo.title}003.png` });
        const updateButton = page.locator('button', { hasText: 'Update' });
        await updateButton.click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate the edition was completed
        await expect(updateButton).toBeDisabled();
    });

    test('13 Full random: Delete a page', async ({ page }, testInfo) => {
        // Select a specific page to delete
        await page.getByText(titlePageFullRandom).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete page
        await page.getByTitle('Settings').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();

        // Confirm the right page to confirm the page is deleted
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}005.png` });
        const tablePages = await page.locator('ol>li').count();

        // Validate the page is deleted
        expect(tablePages).toEqual(1);
    });

    test('14 Full random: Create new page without title', async ({ page }, testInfo) => {
        // Write a new page option selected
        await page.locator('span', { hasText: 'Create a new page' }).click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of page
        await page.getByPlaceholder('Page title').fill('');
        await page.locator('[data-placeholder="Begin writing your page..."]').fill(faker.lorem.paragraph());
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Publish').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const reviewButton = page.locator('button', { hasText: 'Continue, final review →' });

        // Validate the option to validate page is visible
        await expect(reviewButton).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });

        // Publishing page
        await reviewButton.click();
        await page.screenshot({ path: `${testInfo.title}006.png` });
        await page.locator('button', { hasText: 'Publish page, right now' }).dispatchEvent('click')

        // Validate that the new page is published
        expect(page.getByText("(Untitled)")).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}007.png` });
    });

    test('15 Full random: Delete page without title', async ({ page }, testInfo) => {
        // Select a specific page to delete
        await page.getByText("(Untitled)").click();
        await expect(page).toHaveURL(/.*editor/);
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete page
        await page.getByTitle('Settings').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();

        // Confirm the right page to confirm the page is deleted
        await expect(page).toHaveTitle(/Pages - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}005.png` });
        const tablePages = await page.locator('ol>li').count();

        // Validate the page is deleted
        expect(tablePages).toEqual(1);
    });
    // END ------ DATA FULL RANDOM ------

    // BEGIN ------ OTHER TESTS ------   
    test('Create a new page', async ({ page }, testInfo) => {
        // Select the option to create a new page
        await page.getByText('Create a new page').click();
        const breadcrumb = await page.locator('.ember-view.gh-btn-editor.gh-editor-back-button').textContent();

        // Validate the right location
        expect(breadcrumb).toContain("Pages");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of new page
        await page.locator('.gh-editor-title.ember-text-area.gh-input.ember-view').fill('Pais');
        await page.locator('.koenig-editor__editor.__mobiledoc-editor').fill('Colombia');
        await page.getByText('Publish').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Continue, final review →').click();
        await page.locator('.gh-btn', { hasText: 'Publish page, right now' }).click({ force: true });
        await page.screenshot({ path: `${testInfo.title}004.png` });
    })

    test('Edit a page', async ({ page }, testInfo) => {
        // Select a specific page to edit
        await page.getByText('Pais').click();
        const breadcrumb = await page.locator('.gh-editor-post-status').textContent();

        // Validate the right location
        expect(breadcrumb).toContain("Published");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a page
        await page.locator('.gh-editor-title.ember-text-area.gh-input.ember-view').fill('Pais');
        await page.locator('.koenig-editor__editor.__mobiledoc-editor').fill('Inglaterra');
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Update').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('Config settings page', async ({ page }, testInfo) => {
        // Select a specific page to edit config settings
        await page.getByText('Pais').click();
        const breadcrumb = await page.locator('.gh-editor-post-status').textContent();

        // Validate the right location
        expect(breadcrumb).toContain("Published");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Config settings of page
        await page.locator('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
        await page.locator('id=url').fill('pais');
        await page.getByPlaceholder('YYYY-MM-DD').fill('2022-11-11');
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('.input-toggle-component').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('Delete a page', async ({ page }, testInfo) => {
        // Select a specific page to delete
        await page.getByText('Pais').click();
        const breadcrumb = await page.locator('.gh-editor-post-status').textContent();
        expect(breadcrumb).toContain("Published");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete a page
        await page.locator('.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon').click();
        await page.locator('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon.ember-view', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });
    // END ------ OTHER TESTS ------  

    test.afterAll(async ({ page }) => {
        page.close();
    });
});

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
