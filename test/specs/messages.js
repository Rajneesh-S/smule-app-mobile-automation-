
import login from "../utility";
import messagesPage from "../pageobjects/messages.page";

describe('message test', function(){

    before(async()=>{
        
        await login();
      })

    it("check avaibility of message button",async()=>{

        
        await messagesPage.feedButton.click();

        await expect(messagesPage.messageButton).toBeDisplayed();
        
      

    })

    it('should be able to enter in the message ', async()=>{
        
        await messagesPage.messageButton.click();
        await driver.pause(5000);
        
        await expect(messagesPage.checkmessage).toBeExisting();

        
    })

    it('should be able to go to the personal chat ',async()=>{
        await driver.pause(5000);
        
        await messagesPage.enterDm.click();
        
        await expect(messagesPage.checkenterdm).toBeDisplayed();

    })

    it('should be able  to do the  personal chat ',async()=>{
       
        await messagesPage.enteryourmessage.setValue("aur ho");
        
        await messagesPage.sendButton.click();
        
        await expect(messagesPage.checktext).toBeDisplayed();

    })

    it('should be able to return from the personal chat to home page',async()=>{
        
        await messagesPage.returnButton.click();
        
        await messagesPage.returnButton.click();
        
        await expect(messagesPage.checkHomePage).toBeDisplayed();



    })






})