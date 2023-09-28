import loginPage from "./pageobjects/login-page";


const login = async()=>{
    await loginPage.scrolltoLanguage();
    await loginPage.language.click();
    await loginPage.okbutton.click();
    await loginPage.login.click();
    await loginPage.enterEmail.setValue('raj_@gmail.com');
    await loginPage.nextButton.click();
    await loginPage.enterPasswordAgain.addValue("nevergiveup14");
    await loginPage.next.click();


}
export default login;

