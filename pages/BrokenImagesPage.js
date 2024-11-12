
export default class BrokenImagesPage {
    constructor(page) {
        this.page = page
        this.url = 'https://the-internet.herokuapp.com/broken_images'
        this.image = page.locator('div.example img')
    }
}