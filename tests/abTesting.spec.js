import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager'

let pm

test.beforeEach(async ({page}) => {
    pm = new PomManager(page)
})

test.afterEach(async ({page}) => {
    await page.close()
})

test('Assert A/B test page header text', async ({page}) => {
    await page.goto(pm.AbTestingPage.url)
    await expect(pm.AbTestingPage.header).toHaveText('A/B Test Control')
})

