import { Selector } from "testcafe";
/*Labels*/
import Labels from "../config_file/config.json"
class CustomerLoginPage{
    constructor()
    {
    //Selectors to return element values that are present in web page
       this.heading = Selector('h1');
       this.email = Selector('#email');
       this.password = Selector('#password');
       this.login = Selector('input#login')
       this.loginAlert = Selector('section.login')
       this.userIcon = Selector('i.fa-user-circle')
       this.signOut = Selector ('span i')
    }
    //Method to perform the login Operation
    async userLogin(t){
        await t
            .typeText(this.email, Labels.Login.email )
            .typeText(this.password,Labels.Login.password)
            .click(this.login);

    }

}
export default new CustomerLoginPage();