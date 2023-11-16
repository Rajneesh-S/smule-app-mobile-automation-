

import feedPage from "../pageobjects/feed.page";

import login from "../utility";


    


describe('feed test',function(){
  before(async()=>{
    await login();
  })
    it('feed button should be visible',async()=>{
      
       await expect(feedPage.feedButton).toBeDisplayed();
       await feedPage.feedButton.click();
       await driver.pause(3000);

    })


    it('shopuld be able click to the feed ',async()=>{
        
        await feedPage.feed.click();
        await driver.pause(2000);
    })


    it('should be able to reach into the feed feature ',async()=>{
        
        await expect(feedPage.feedcheck).toBeDisplayed();
    }) 

    
    it('should be able to  go to the  invite friend', async()=>{
      
      await feedPage.startButton.click();
      
      await expect(feedPage.invitefriend).toBeDisplayed(); 
     
      await feedPage.returnButton.click();
    })


    it('should be able to scrooll ', async()=>{
        
          await feedPage.scroll();
          await expect(feedPage.invitefriend).not.toBeDisplayed(); 
    })

   

})