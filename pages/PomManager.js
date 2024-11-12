import AbTestingPage from "./AbTestingPage"
import AddRemovePage from "./AddRemovePage"
import BasicAuthPage from "./BasicAuthPage"
import BrokenImagesPage from "./BrokenImagesPage"
import ChallengingDomPage from "./ChallengingDomPage"

export default class PomManager {
    constructor(page) {
        this.page = page
        this.AbTestingPage = new AbTestingPage(page)
        this.AddRemovePage = new AddRemovePage(page)
        this.BasicAuthPage = new BasicAuthPage(page)
        this.BrokenImagesPage = new BrokenImagesPage(page)
        this.ChallengingDomPage = new ChallengingDomPage(page)
    }
}