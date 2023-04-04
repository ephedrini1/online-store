import Page from "./components/page";
import './global.css';

export default class App {
    private container: HTMLElement = document.body;
    page: Page;
    constructor() {
        this.page = new Page(document.body);
    }
}


