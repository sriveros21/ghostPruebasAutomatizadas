import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import data from '../data/data-tag.json';

test.describe.serial("Tag E2E Scenarios", () => {
    const nameTagPriori = data[0].name_tag;
    const nameTagPseudoRandom = data[randomIntFromInterval(1, 999)].name_tag;
    const nameTagFullRandom = faker.name.jobTitle();

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

        // Expects the URL.
        await expect(page).toHaveURL(/.*dashboard/);
        await page.goto('/ghost/#/tags');
        await page.screenshot({ path: `${testInfo.title}001.png` });

        // Expects to be in the creation of tag section
        await expect(page).toHaveTitle(/Tags - Pruebas Automatizadas/);
    });

    // BEGIN ------ DATA POOL A-PRIORI ------
    test('01 Data a-priori: Create a new tag without name', async ({ page }, testInfo) => {
        // Select the option to create a new tag
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of new tag without name
        await page.locator('id=tag-name').fill('');
        await page.locator('id=tag-description').fill(data[0].description_tag);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate that the new tag is not created
        const errorLogin = await page.getByText("You must specify a name for the tag.").textContent();
        expect(errorLogin).toContain("must");
        await page.screenshot({ path: `${testInfo.title}005.png` });
    });

    test('02 Data a-priori: Create a new tag', async ({ page }, testInfo) => {
        // Select the option to create a new tag
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of new tag
        await page.locator('id=tag-name').fill(nameTagPriori);
        await page.locator('id=tag-description').fill(data[0].description_tag);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate that the new tag is created
        expect(page.getByText(nameTagPriori)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });
    });

    test('03 Data a-priori: Edit a tag without name', async ({ page }, testInfo) => {
        // Select a specific tag to be edited
        await page.getByText(nameTagPriori).click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill('');
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is not edited
        const errorLogin = await page.getByText("You must specify a name for the tag.").textContent();
        expect(errorLogin).toContain("must");
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('04 Data a-priori: Edit a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be edited
        await page.getByText(nameTagPriori).click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill(nameTagPriori + "...");
        await page.locator('id=tag-description').fill(data[0].description_tag);
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is edited
        expect(page.getByText(nameTagPriori)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('05 Data a-priori: Delete a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be deleted
        await page.getByText(nameTagPriori).click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete a tag
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon', { hasText: 'Delete tag' }).click();
        await page.waitForTimeout(100);
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is deleted
        await expect(page).toHaveTitle(/Tags - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const tableTags = await page.locator('ol>li').count();
        expect(tableTags).toEqual(1);
    });
    // END ------ DATA POOL A-PRIORI ------

    // BEGIN ------ DATA POOL PSEUDO RANDOM ------
    test('06 Pseudo random: Create a new tag without name', async ({ page }, testInfo) => {
        // Select the option to create a new tag
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of new tag without name
        await page.locator('id=tag-name').fill('');
        await page.locator('id=tag-description').fill(data[randomIntFromInterval(1, 999)].description_tag);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate that the new tag is not created
        const errorLogin = await page.getByText("You must specify a name for the tag.").textContent();
        expect(errorLogin).toContain("must");
        await page.screenshot({ path: `${testInfo.title}005.png` });
    });

    test('07 Pseudo random: Create a new tag', async ({ page }, testInfo) => {
        // Select the option to create a new tag
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of new tag
        await page.locator('id=tag-name').fill(nameTagPseudoRandom);
        await page.locator('id=tag-description').fill(data[randomIntFromInterval(1, 999)].description_tag);
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate that the new tag is created
        expect(page.getByText(nameTagPseudoRandom)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });
    });

    test('08 Pseudo random: Edit a tag without name', async ({ page }, testInfo) => {
        // Select a specific tag to be edited
        await page.getByText(nameTagPseudoRandom).click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill('');
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is not edited
        const errorLogin = await page.getByText("You must specify a name for the tag.").textContent();
        expect(errorLogin).toContain("must");
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('09 Pseudo random: Edit a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be edited
        await page.getByText(nameTagPseudoRandom).click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill(nameTagPseudoRandom + "...");
        await page.locator('id=tag-description').fill(data[randomIntFromInterval(1, 999)].description_tag);
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is edited
        expect(page.getByText(nameTagPseudoRandom)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('10 Pseudo random: Delete a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be deleted
        await page.getByText(nameTagPseudoRandom).click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete a tag
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon', { hasText: 'Delete tag' }).click();
        await page.waitForTimeout(100);
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is deleted
        await expect(page).toHaveTitle(/Tags - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const tableTags = await page.locator('ol>li').count();
        expect(tableTags).toEqual(1);
    });
    // END ------ DATA POOL PSEUDO RANDOM ------

    // BEGIN ------ DATA FULL RANDOM ------
    test('11 Full random: Create a new tag without name', async ({ page }, testInfo) => {
        // Select the option to create a new tag
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of new tag without name
        await page.locator('id=tag-name').fill('');
        await page.locator('id=tag-description').fill(faker.lorem.paragraph());
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate that the new tag is not created
        const errorLogin = await page.getByText("You must specify a name for the tag.").textContent();
        expect(errorLogin).toContain("must");
        await page.screenshot({ path: `${testInfo.title}005.png` });
    });

    test('12 Full random: Create a new tag', async ({ page }, testInfo) => {
        // Select the option to create a new tag
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Creation of new tag
        await page.locator('id=tag-name').fill(nameTagFullRandom);
        await page.locator('id=tag-description').fill(faker.lorem.paragraph());
        await page.screenshot({ path: `${testInfo.title}003.png` });
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}004.png` });

        // Validate that the new tag is created
        expect(page.getByText(nameTagFullRandom)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}005.png` });
    });

    test('13 Full random: Edit a tag without name', async ({ page }, testInfo) => {
        // Select a specific tag to be edited
        await page.getByText(nameTagFullRandom).click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill('');
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is not edited
        const errorLogin = await page.getByText("You must specify a name for the tag.").textContent();
        expect(errorLogin).toContain("must");
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('14 Full random: Edit a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be edited
        await page.getByText(nameTagFullRandom).click();
        const breadcrumb = await page.locator('.gh-canvas-breadcrumb').textContent();
        expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill(nameTagFullRandom + "...");
        await page.locator('id=tag-description').fill(faker.lorem.paragraph());
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is edited
        expect(page.getByText(nameTagFullRandom)).toBeVisible();
        await page.screenshot({ path: `${testInfo.title}004.png` });
    });

    test('15 Full random: Delete a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be deleted
        await page.getByText(nameTagFullRandom).click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete a tag
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon', { hasText: 'Delete tag' }).click();
        await page.waitForTimeout(100);
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}003.png` });

        // Validate that the new tag is deleted
        await expect(page).toHaveTitle(/Tags - Pruebas Automatizadas/);
        await page.screenshot({ path: `${testInfo.title}004.png` });
        const tableTags = await page.locator('ol>li').count();
        expect(tableTags).toEqual(1);
    });
    // END ------ DATA FULL RANDOM ------

    // BEGIN ------ OTHER TESTS ------
    test('Create a new tag', async ({ page }, testInfo) => {
        // Select the option to create a new tag
        await page.getByText('Create a new tag').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        expect(breadcrumb).toContain("New tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });
        // Creation of new tag
        await page.locator('id=tag-name').fill('Pais');
        await page.locator('id=tag-description').fill('Colombia');
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
    });

    test('Edit a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be edited
        await page.getByText('Colombia').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        //expect(breadcrumb).toContain("Edit tag");
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Edition of a tag
        await page.locator('id=tag-name').fill('Country');
        await page.locator('id=tag-description').fill('Colombia');
        await page.getByText('Save').click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
    });

    test('Delete a tag', async ({ page }, testInfo) => {
        // Select a specific tag to be deleted
        await page.getByText('Colombia').click();
        const breadcrumb = await page.locator('.gh-canvas-title').textContent();
        await page.screenshot({ path: `${testInfo.title}002.png` });

        // Delete a tag
        await page.locator('.gh-btn.gh-btn-red.gh-btn-icon', { hasText: 'Delete tag' }).click();
        await page.waitForTimeout(100);
        await page.locator('.modal-footer>button', { hasText: 'Delete' }).click();
        await page.screenshot({ path: `${testInfo.title}003.png` });
    });
    // END ------ OTHER TESTS ------

    test.afterAll(async ({ page }) => {
        page.close();
    });
});

function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
