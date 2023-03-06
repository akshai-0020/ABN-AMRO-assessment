# Test assignment
We are looking for Automation Engineers that have the mindset "only the sky is the limit"
and "automation doesn't stop at testing, it's just a beginning!" ;)

The purpose of this test assignment is to assess the applicant's automation skills, allowing him/her to show the best they can do and how fast they can learn.
It is an open assignment. There is no the right answer and there is no end goal other than proving yourself. Surprise us!

Make sure that you give detailed comments or descriptions of your tests.
When the assignment is complete, please push your solution to Github(Gitlab) and send us the link.
If you have any questions, please contact us back.

Good luck!

PS. We don't expect you to spend weeks (and sleepless nights) on doing it. Lets see how far you can get in 6-10 hours. We want to see how you approach and solve problems.

And you will find the users to login in users.js.

How to run the scripts in your local machine?

-We are checking the functionality of this application using automation framework i.e., “Test Café”. The Scripts are implemented using JavaScript and Page Object Model(POM) approach.

Prerequisite: Node.js, git, IDE.

1.Install Node.js in your system. Check “node -v” in command prompt to check the installed version.

2.Check “npm -v” to check the npm version.

3.Install git on your system to clone (To check use “git -v” in cmd prompt).

4.Once the git is installed open command prompt or git bash enter the code.

5.Install an IDE to view the code properly in your system (-Vs Code preferred).

To run the test scripts on your local machine from GitHub(Gitlab), please do the following steps:

1.Click on the clone link from the GitHub(Gitlab). All my test Scripts are stored in functional_tests folder.

  Use this command to clone: git clone “clone link”.

2.Once it is cloned give “npm i” in the command prompt inside folder”ABN AMRO assesment" to install all node_modules and dependencies needed.

3.Before running the script add the location path of the index.html in the Functional_tests/config_file/config.json under pageUrl.

     Use the format as "C:/Users/AKSHAIS/Music/ABN-AMRO-assessment/testautomation-web/index.html"
     
4.Once all the dependencies are installed run the script using “npm run test”.

5.Scripts to run the code in different mode is present in package.json file. 
            
            * npm run test - To run the test in chrome browser normally.

            * npm run testCross - To run the test in different browsers.

            * npm run testReport - It will run the test and save the report in Test_Reports file in     HTMLformat.

            * npm run testScreenShot - To run the test and take the Screenshots needed.

            * npm run testEdge - To run the Script in edge browser.

            * npm run test-Env - Run the test based on given meta key value.

            * npm run testEvidence - Run the test and takes the Screenshot when the test fails and save the Screen shots in Evidence folder inside Functional_tests.
 
6.Test Scenarios prepared for automation Scripts are also added in the Test Design.xlsx file inside the folder.