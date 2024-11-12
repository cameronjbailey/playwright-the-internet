import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager'

let pm

test.beforeEach(async ({page}) => {
    pm = new PomManager(page)
    await page.goto(pm.AddRemovePage.url)
})

test.afterEach(async ({page}) => {
    await page.close()
})

test('Verify single element can be added', async ({page}) => {
    
    await pm.AddRemovePage.addElement.click()
    await expect(pm.AddRemovePage.delElement).toBeVisible()
})

test('Verify single element can be removed', async ({page}) => {
    await pm.AddRemovePage.addElement.click()
    await expect(pm.AddRemovePage.delElement).toBeVisible()
    await pm.AddRemovePage.delElement.click()
    await expect(pm.AddRemovePage.delElement).not.toBeVisible()
})

test('Verify multiple elements can be added', async ({page}) => {    
    const index = 3
    for(let i = 0; i < index; i++) {
        console.log(i)
        await pm.AddRemovePage.addElement.click()
    }

    await expect(pm.AddRemovePage.delElement).toHaveCount(index)
})

test('Verify multiple elements can be removed', async ({page}) => {    
    // Add elements by clicking button
    const elements = 5
    for(let i = 0; i < elements; i++) {
        console.log(i)
        await pm.AddRemovePage.addElement.click()
    }
    
    // Assert the correct number of buttons have been added
    await expect(pm.AddRemovePage.delElement).toHaveCount(elements)

    // Remove elements by clicking left-most button
    for(let i = 0; i < elements; i++) {
        console.log(i)
        await pm.AddRemovePage.delElement.nth(0).click()
    }

    // Assert there are no Delete buttons remaining
    await expect(pm.AddRemovePage.delElement).toHaveCount(0)

})

test('Verify UI state on page reload', async ({page}) => {    
    // Add elements by clicking button
    const elements = 3
    for(let i = 0; i < elements; i++) {
        console.log(i)
        await pm.AddRemovePage.addElement.click()
    }
    
    // Assert the correct number of buttons have been added
    await expect(pm.AddRemovePage.delElement).toHaveCount(elements)

    // Reload the page
    await page.reload()

    // Assert there are no Delete buttons remaining
    await expect(pm.AddRemovePage.delElement).toHaveCount(0)

})