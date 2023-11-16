import loginPage from "../pageobjects/login-page";

describe('login test', function(){
  it('should be able to open the app and select the language ', async()=>{
    
      await loginPage.scrolltoLanguage();
  
      
      await loginPage.language.click();
      

      await loginPage.okbutton.click();
      
      await expect(loginPage.check).toBeDisplayed();

  })

   it("should be able to go to  the login button by email ", async () => {
      
      await expect(loginPage.login).toBeDisplayed();
      await loginPage.login.click();
      // await driver.pause(3000);
  
    
    });
    it("should be able to enter the email and move to the password  ",async()=>
    {
      
        await loginPage.enterEmail.setValue('raj_@gmail.com');

       
        await loginPage.nextButton.click();

       
        await expect(loginPage.enterPassword).toBeDisplayed();
        
    })

    it("should be get error when enter wrong password",async()=>{
      
      await loginPage.enterPassword.addValue("never");
      await loginPage.next.click();
       await driver.pause(3000);
      
      await expect(loginPage.wrongPassAlert).toBeExisting();
      await loginPage.wrongPassAlert.click();


      // await driver.pause(5000);
    })

    it('should be able to login by entering password',async()=>{
      
        await loginPage.enterPasswordAgain.addValue("nevergiveup14");
        
        await loginPage.next.click();
         await driver.pause(5000)
        
      
        await driver.pause(5000);

        

    })

    
})