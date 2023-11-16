import loginPage from "../pageobjects/login-page";
import login from "../utility";
import profilePage from "../pageobjects/profile.page";
describe("profile test", function () {
  before(async () => {
    await login();
  });
  it("should be able to the profile option ", async () => {
   
    await profilePage.feedButton.click();

    
    await profilePage.profile.click();

    
    await expect(profilePage.editprofileButton).toBeDisplayed();
  });

  

  it("should be able to enter in the about section", async () => {
    
    await profilePage.aboutButton.click();

   
    let abouttext = await profilePage.checktext.getText();
    await expect(abouttext).toEqual("Bookmarked songs");
  });


  it(" edit profile button should exist and information should get edited", async () => {
    let text = " Rajneesh here";
   
    await profilePage.editButton.click();
    
    
    await profilePage.scroll();


    await profilePage.editBio.addValue(text);
    await  profilePage.saveButton.click();
    const bioText = await $(
      '//*[@resource-id="com.smule.singandroid:id/txt_profile_blurb"]'
    ).getText();
    await expect(bioText).toBe(text);
    
  });





  it("should be able to enter into the profile menu", async () => {
    
    await profilePage.menuButton.click();
   
    await expect(profilePage.menuChecker).toBeDisplayed();
    
  });



  






});

