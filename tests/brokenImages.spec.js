import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager';

let pm

test.beforeEach(async ({page}) => {
    pm = new PomManager(page)
})

test.afterEach(async ({page}) => {
    await page.close()
})

test.fixme('Verify that all images load', async({page})  => {
    await page.goto(pm.BrokenImagesPage.url);

    const allImages = await pm.BrokenImagesPage.image.all()
    console.log(await allImages[2].getAttribute('src'))
    
    // check if they have loaded

})

// https://www.youtube.com/watch?v=4G8c7BwHY5s