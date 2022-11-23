import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import data from '../data/data-login.json';

test.describe.serial("Post E2E Scenarios", () => {
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
  
      // Expects the URL 
      await expect(page).toHaveURL("http://localhost:2368/ghost/#/dashboard");
      await page.screenshot({ path: `${testInfo.title}001.png` });
    });
  
    test('Ramdon scenario: Sign out', async ({ page }, testInfo) => {
      // Sign out from the app
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();

      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Login with bad credentials
      await page.locator('id=ember6').fill(faker.internet.email());
      await page.locator('id=ember8').fill(faker.internet.password());
      await page.getByText('Sign in →').click();
      const errorLogin = await page.getByText("There is no user with that email address.").textContent();
      expect(errorLogin).toContain("There is no user");
      await page.screenshot({ path: `${testInfo.title}003.png` });
      // Login with correct credentials
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Retry').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(page).toHaveURL("http://localhost:2368/ghost/#/dashboard");
    });

    test('Data Priori: Sign out', async ({ page }, testInfo) => {
      // Sign out from the app
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();

      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Login with bad credentials
      await page.locator('id=ember6').fill(data[0].user);
      await page.locator('id=ember8').fill(data[0].pass);
      await page.getByText('Sign in →').click();
      const errorLogin = await page.getByText("Please fill out the form to sign in.").textContent();
      expect(errorLogin).toContain("Please");
      await page.screenshot({ path: `${testInfo.title}003.png` });
      // Login with correct credentials
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Retry').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(page).toHaveURL("http://localhost:2368/ghost/#/dashboard");
    });

    test('Ramdon pool: Sign out', async ({ page }, testInfo) => {
      // Sign out from the app
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();

      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Login with bad credentials
      await page.locator('id=ember6').fill(data[randomIntFromInterval(1,99)]["user"]);
      await page.locator('id=ember8').fill(data[randomIntFromInterval(1,99)]["pass"]);
      await page.getByText('Sign in →').click();
      const errorLogin = await page.getByText("Please fill out the form to sign in.").textContent();
      expect(errorLogin).toContain("Please");
      await page.screenshot({ path: `${testInfo.title}003.png` });
      // Login with correct credentials
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Retry').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(page).toHaveURL("http://localhost:2368/ghost/#/dashboard");
    });

    test('Ramdon scenario: Sign In with multiple type of data', async ({ page }, testInfo) => {
      // Sign out from the app
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();

      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Login with bad credentials
      await page.locator('id=ember6').fill(faker.internet.email());
      await page.locator('id=ember8').fill(faker.internet.password());
      await page.getByText('Sign in →').click();
      let errorLogin = await page.getByText("There is no user with that email address.").textContent();
      expect(errorLogin).toContain("There is no user");
      await page.locator('id=ember6').fill(faker.hacker.ingverb());
      await page.locator('id=ember8').fill(faker.git.shortSha());
      await page.getByText('Retry').click();
      errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill out");
      await page.locator('id=ember6').fill(faker.system.networkInterface());
      await page.locator('id=ember8').fill(faker.random.alphaNumeric(200));
      await page.getByText('Retry').click();
      errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill");
      // Login with correct credentials
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Retry').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(page).toHaveURL("http://localhost:2368/ghost/#/dashboard");
    });

    test('Data priori: Sign In with multiple type of data', async ({ page }, testInfo) => {
      // Sign out from the app
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();

      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Login with bad credentials
      await page.locator('id=ember6').fill(data[34].user);
      await page.locator('id=ember8').fill(data[21].pass);
      await page.getByText('Sign in →').click();
      let errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill out");
      await page.locator('id=ember6').fill(data[99].user);
      await page.locator('id=ember8').fill(data[85].pass);
      await page.getByText('Retry').click();
      errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill out");
      await page.locator('id=ember6').fill(data[12].user);
      await page.locator('id=ember8').fill(data[51].pass);
      await page.getByText('Retry').click();
      errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill");
      // Login with correct credentials
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Retry').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(page).toHaveURL("http://localhost:2368/ghost/#/dashboard");
    });

    test('Ramdon pool: Sign In with multiple type of data', async ({ page }, testInfo) => {
      // Sign out from the app
      await page.locator('.gh-user-avatar').click();
      await page.getByText('Sign out').click();

      // Expects to be in the staff section
      await expect(page).toHaveURL(/.*signin/);
      await page.screenshot({ path: `${testInfo.title}002.png` });
      // Login with bad credentials
      await page.locator('id=ember6').fill(data[randomIntFromInterval(1,99)].user);
      await page.locator('id=ember8').fill(data[randomIntFromInterval(1,99)].pass);
      await page.getByText('Sign in →').click();
      let errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill out");
      await page.locator('id=ember6').fill(data[randomIntFromInterval(1,99)].user);
      await page.locator('id=ember8').fill(data[randomIntFromInterval(1,99)].pass);
      await page.getByText('Retry').click();
      errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill out");
      await page.locator('id=ember6').fill(data[randomIntFromInterval(1,99)].user);
      await page.locator('id=ember8').fill(data[randomIntFromInterval(1,99)].pass);
      await page.getByText('Retry').click();
      errorLogin = await page.getByText("Please fill out the form to sign in").textContent();
      expect(errorLogin).toContain("Please fill");
      // Login with correct credentials
      await page.locator('id=ember6').fill('sr@34.com');
      await page.locator('id=ember8').fill('3102326449');
      await page.getByText('Retry').click();
      await page.screenshot({ path: `${testInfo.title}004.png` });
      await expect(page).toHaveURL("http://localhost:2368/ghost/#/dashboard");
    });


    test.afterAll(async ({ page }) => {
        page.close();
      });
});

function randomIntFromInterval(min: number, max: number) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}