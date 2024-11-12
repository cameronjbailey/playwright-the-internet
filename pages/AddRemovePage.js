
export default class AddRemovePage {
    constructor(page) {
        this.page = page
        this.url = 'https://the-internet.herokuapp.com/add_remove_elements/'
        this.addElement = page.getByRole('button', { name: 'Add Element' })
        this.delElement = page.locator('button.added-manually')
    }
}