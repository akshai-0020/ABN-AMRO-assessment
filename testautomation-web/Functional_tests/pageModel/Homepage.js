import { Selector } from "testcafe";

class HomePage{
    constructor()
    {
        //Selectors to return element values that are present in web page
        this.Home = Selector('div.home');
        this.Product = Selector('div.products');
        this.Contact = Selector('div.contact');
        this.Message = Selector('footer')
        this.Content = Selector('div.div-container')
    }

}

export default new HomePage();