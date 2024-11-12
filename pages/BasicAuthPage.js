export default class BasicAuthPage {
    constructor(page) {
        this.page = page
        this.url = 'https://the-internet.herokuapp.com/basic_auth'
        this.paragraph = page.locator('p')
        this.body = page.locator('body')
    }
}