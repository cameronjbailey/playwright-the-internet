import { test, expect } from '@playwright/test'

test('Navigate to A/B Testing from Home Page', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')
    const link = page.getByRole('link', { name: 'A/B Testing'})
    console.log(link)
    await link.click()
    await page.pause()
})

test('Assert A/B test page header text', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.getByRole('link', { name: 'A/B Testing'}).click()
    await expect(page.locator('h3')).toHaveText('A/B Test Control')
})

