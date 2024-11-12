import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager';

let pm

test.beforeEach(async ({page}) => {
    pm = new PomManager(page)
    await page.goto(pm.ChallengingDomPage.url)
})

test.afterEach(async ({page}) => {
    await page.close()
})

test('Click on first button', async({page}) => {
    await pm.ChallengingDomPage.button1.click()
})

test('Verify table header contents', async({page}) => {
    await pm.ChallengingDomPage.tableRow.nth(0).isVisible()
    await expect(pm.ChallengingDomPage.tableHeader.nth(0)).toHaveText('Lorem')
})

test('Verify number of rows in table body', async({page}) => {
    const rows = pm.ChallengingDomPage.tableBodyRow
    await expect(rows).toHaveCount(10)
})
