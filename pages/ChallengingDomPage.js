export default class ChallengingDomPage {
    constructor(page) {
        this.page = page
        this.url = 'https://the-internet.herokuapp.com/challenging_dom'
        this.rows = page.locator('tbody tr')
        this.tableHeader = page.locator('th')
        this.tableRow = page.locator('tr')
        this.tableBodyRow = page.locator('tbody tr')
        this.button1 = page.locator('a.button').nth(0)
        this.button2 = page.locator('a.button').nth(1)
        this.button3 = page.locator('a.button').nth(2)
    }
}