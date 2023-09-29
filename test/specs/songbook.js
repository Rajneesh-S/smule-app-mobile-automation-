
import login from "../utility";

import songbookPage from "../pageobjects/songbook.page";



 


describe('singing test',function(){
    
    before(async()=>{
    await login();
  })

    it('should be able to go to the customize',async()=>{
     
        await songbookPage.feedButton.waitForExist({ timeout: 20000});
        await songbookPage.feedButton.click();
       
        await songbookPage.customizeButton.click();
       
        await expect(songbookPage.check).toBeDisplayed();	
        
        await songbookPage.backButton.click();

    })
    it('should be able to select free option ',async()=>{
        


       
        await songbookPage.freebutton.click();
        
        await expect(songbookPage.freecheck).not.toBeDisplayed();
    })

    it('shoild be able to click on sing and check the avialbility of  solo',async()=>{
        
        
        await songbookPage.singButton.click();

        
        await expect(songbookPage.soloButton).toBeDisplayed();




    })

    it('should be able to enter in the solo sing',async()=>{
        await driver.pause(5000);
       
        await songbookPage.soloButton.click();
       
        await expect(songbookPage.audioButton).toBeDisplayed();


    })

    it('should be able to select audio mode and reach to start sing  ',async()=>{
        
        await songbookPage.audioButton.click();
        
        await expect(songbookPage.start).toBeDisplayed();
       
    
    })

    
})