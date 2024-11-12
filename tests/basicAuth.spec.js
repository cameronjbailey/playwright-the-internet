import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager';

let pm

test.beforeEach(async ({page}) => {
    pm = new PomManager(page)
})

test.afterEach(async ({page}) => {
    await page.close()
})

test('Login attempt with valid credentials', async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });
  const page = await context.newPage();
  pm = new PomManager(page);
  await page.goto(pm.BasicAuthPage.url);
  await expect(page).toHaveURL(pm.BasicAuthPage.url);
  await expect(pm.BasicAuthPage.paragraph).toHaveText('Congratulations! You must have the proper credentials.')
});

test('Login attempt with invalid password', async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'wrongpass'
      }
    });
    const page = await context.newPage();
    pm = new PomManager(page);
    await page.goto(pm.BasicAuthPage.url);
    await expect(page).toHaveURL(pm.BasicAuthPage.url);
    await expect(pm.BasicAuthPage.body).toHaveText('Not authorized')
});


