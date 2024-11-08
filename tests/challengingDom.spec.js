import { test, expect } from '@playwright/test'

test('Click on first button', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    await page.locator('a.button').nth(0).click()
})


test('Verify table header contents', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    await page.locator('tr').nth(0).isVisible()
    await expect(page.locator('th').nth(0)).toHaveText('Lorem')
})

test('Verify number of table rows', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
    const rows = page.locator('tbody tr')
    await expect(rows).toHaveCount(10)
})