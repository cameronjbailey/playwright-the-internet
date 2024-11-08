import { test, expect } from '@playwright/test'

test('Login attempt with valid credentials', async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });
  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/basic_auth');
  await expect(page.locator('p')).toHaveText('Congratulations! You must have the proper credentials.')
});

test('Login attempt with invalid password', async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'wrongpass'
      }
    });
    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/basic_auth');
    await expect(page.locator('body')).toHaveText('Not authorized')
});


