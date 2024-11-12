export default class AbTestingPage {
    constructor(page) {
        this.page = page
        this.header = page.locator('h3')
        this.url = 'https://the-internet.herokuapp.com/abtest'
    }

}