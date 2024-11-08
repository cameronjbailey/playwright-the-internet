import { test, expect } from '@playwright/test'

test('Navigate to Add/Remove Page Testing from Home Page', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.getByRole('link', { name: 'A/B Testing'}).click()
    await page.pause()
})

test('Verify single element can be added', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    await page.getByRole('button', { name: 'Add Element' }).click()
    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible()
})

test('Verify single element can be removed', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    await page.getByRole('button', { name: 'Add Element' }).click()
    await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible()
    await page.getByRole('button', { name: 'Delete'}).click()
    await expect(page.getByRole('button', { name: 'Delete' })).not.toBeVisible()
})

test('Verify multiple elements can be added', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    
    const index = 3
    for(let i = 0; i < index; i++) {
        console.log(i)
        await page.getByRole('button', { name: 'Add Element' }).click()
    }

    await expect(page.locator('button.added-manually')).toHaveCount(index)
})

test('Verify multiple elements can be removed', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    
    // Add elements by clicking button
    const elements = 5
    for(let i = 0; i < elements; i++) {
        console.log(i)
        await page.getByRole('button', { name: 'Add Element' }).click()
    }
    
    // Assert the correct number of buttons have been added
    await expect(page.locator('button.added-manually')).toHaveCount(elements)

    // Remove elements by clicking left-most button
    for(let i = 0; i < elements; i++) {
        console.log(i)
        await page.getByRole('button', { name: 'Delete'}).nth(0).click()
    }

    // Assert there are no Delete buttons remaining
    await expect(page.locator('button.added-manually')).toHaveCount(0)

})

test('Verify UI state on page reload', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')
    
    // Add elements by clicking button
    const elements = 3
    for(let i = 0; i < elements; i++) {
        console.log(i)
        await page.getByRole('button', { name: 'Add Element' }).click()
    }
    
    // Assert the correct number of buttons have been added
    await expect(page.locator('button.added-manually')).toHaveCount(elements)

    // Reload the page
    await page.reload()

    // Assert there are no Delete buttons remaining
    await expect(page.locator('button.added-manually')).toHaveCount(0)

})