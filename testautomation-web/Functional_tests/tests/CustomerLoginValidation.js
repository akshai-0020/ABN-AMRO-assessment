import CustomerLoginpage from "../pageModel/CustomerLoginpage";
/*Labels*/
import Labels from "../config_file/config.json"
import { Selector ,t } from "testcafe";

//A fixture must be created for the each group of test
fixture('Check user can able to navigate to login page')
    .page(Labels.Login.pageUrl)
    .meta('Env','Local')
    .beforeEach(async t => {
        await t
        .maximizeWindow()
        .setTestSpeed(1);
      });
//Given user is with the URL and tries to navigate to login page.
test('To check user can able to navigate to Login page', async t => {
    await t
    .expect(CustomerLoginpage.heading.innerText).eql(Labels.Login.Heading);
});

//A fixture must be created for the each group of test.
fixture('Login functionality with valid user data')
.page(Labels.Login.pageUrl)
.meta('Env','Local')
.beforeEach(async t => {
    await t
    .maximizeWindow()
    .setTestSpeed(1);
  });
//Given user is on the Login page with valid email and password to login.
test('To check user can able to Login into the profile with valid email id and password', async t => {
    await t.takeScreenshot()
    await CustomerLoginpage.userLogin(t);
    await t
    .expect(CustomerLoginpage.userIcon.exists).ok()
    .takeScreenshot();
});

//Given user need to check the functionality of the logout.
test('To check user can able to Logout after the successful login', async t => {
    await CustomerLoginpage.userLogin(t);
    await t
    .click(CustomerLoginpage.userIcon)
    //Checks the sign out button is visible.
    .expect(CustomerLoginpage.signOut.exists).ok()
    .takeScreenshot()
    .click(CustomerLoginpage.signOut)
    //Checks the heading text in the Homepage.
    .expect(CustomerLoginpage.heading.innerText).eql(Labels.Login.Heading)
    .takeScreenshot();
});

//A fixture must be created for the each group of test.
fixture('Login page-Error Scenarios')
.page(Labels.Login.pageUrl)
.meta('Env','Local')
.beforeEach(async t => {
    await t
    .maximizeWindow()
    .setTestSpeed(1);
  });
//Given user not able to login with invalid credentails and checks for alert.
test('To check user can able to view alert while entering invalid email id and password', async t => {
    await t
    .typeText(CustomerLoginpage.email,Labels.Login.invalidEmail)
    .typeText(CustomerLoginpage.password,Labels.Login.invalidPassword)
    .click(CustomerLoginpage.login)
    //Checks the login is not performed for invalid login credentials.
    .expect(CustomerLoginpage.heading.innerText).eql(Labels.Login.Heading)
    //Expected to display the alert for invalid email and password.
    .expect(CustomerLoginpage.loginAlert.innerText).contains(Labels.Login.invalidAlert)
    .takeScreenshot();
});