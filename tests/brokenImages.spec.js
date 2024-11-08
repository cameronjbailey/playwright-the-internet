import { test, expect } from '@playwright/test'

test.fixme('Verify that all images load', async({page})  => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    
    // locate all images via img tags
    const images = page.locator('div.example img')
    console.log(images)
    console.log(await images.count())
    
    const allImages = await images.all()
    console.log(allImages)
    console.log(await allImages[2].getAttribute('src'))
    
    // check if they have loaded



})

// https://www.youtube.com/watch?v=4G8c7BwHY5s