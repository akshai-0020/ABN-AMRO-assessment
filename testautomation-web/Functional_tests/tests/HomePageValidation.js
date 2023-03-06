import Homepage from "../pageModel/Homepage";
/*Labels*/
import Labels from "../config_file/config.json"
import CustomerLoginpage from "../pageModel/CustomerLoginpage";
import { ClientFunction } from "testcafe";


//used to get the URL of the current page
const getUrl = ClientFunction(() =>  window.location.href);
//A fixture must be created for the each group of test.
fixture('Check the header buttons of the Home page')
.page(Labels.Login.pageUrl)
.meta('Env','Local')
.beforeEach(async t => {
  await t
  .maximizeWindow()
  .setTestSpeed(1);
});
//Given user is on the login page and check link is navigated properly.
test('Check the Home button on the header of the page', async t => {
  await CustomerLoginpage.userLogin(t);
  await t
  .expect(Homepage.Home.exists).ok()
  .click(Homepage.Home)
  //Check the current URL and Check whether the page is navigated.
  .expect(getUrl()).contains(Labels.Homepage.homeLink)
  .takeScreenshot();
});
//Given user is on the login page and check link is navigated properly.
test('Check the Product button on the header of the page', async t => {
  await CustomerLoginpage.userLogin(t);
    await t
    .expect(Homepage.Product.exists).ok()  
    .click(Homepage.Product)
    //Check the current URL and Check whether the page is navigated.
    .expect(getUrl()).contains(Labels.Homepage.productLink)
    .takeScreenshot();
  });
 //Given user is on the login page and check link is navigated properly.
  test('Check the Contact button on the header of the page', async t => {
    await CustomerLoginpage.userLogin(t);
    await t
    .expect(Homepage.Contact.exists).ok()  
    .click(Homepage.Contact)
    //Check the current URL and Check whether the page is navigated.
    .expect(getUrl()).contains(Labels.Homepage.contactLink)
    .takeScreenshot();
  });
//A fixture must be created for the each group of test.
fixture('Check the welcome message in footer of the page')
.page(Labels.Login.pageUrl)
.meta('Env','Local')
.beforeEach(async t => {
  await t
  .maximizeWindow()
  .setTestSpeed(1);
});
 //Given user is on the login page and check message in the footer of the page.
  test('Verify the welcome message in the bottom of the page', async t=>{
    await t
    //Check the message in the login page.
    .expect(Homepage.Message.innerText).eql(Labels.Homepage.welcomeMessage)
    .takeScreenshot();
    await CustomerLoginpage.userLogin(t);
    //Check the message in the Home page.
    await t.expect(Homepage.Message.innerText).eql(Labels.Homepage.welcomeMessage)
    .takeScreenshot();
  });
//A fixture must be created for the each group of test.
fixture('Check the content on the Home page after login')
  .page(Labels.Login.pageUrl)
  .meta('Env','Local')
  .beforeEach(async t => {
    await t
    .maximizeWindow()
    .setTestSpeed(1);
  });
  //Given user is on the login page and check the content displayed after login. 
  test('To verify the content message is displayed in the home page properly', async t=>{
    await CustomerLoginpage.userLogin(t);
    //Checks the content on the page is exists.
    await t
    .expect(Homepage.Content.exists).ok()
    .takeScreenshot();
  });