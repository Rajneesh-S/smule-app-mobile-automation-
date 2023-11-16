class Login{


     scrolltoLanguage = async()=>{
        await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("English")'
          );

     }
    get language (){
        return $('//*[@text="English"]');
    }
    get okbutton (){
        return $('//*[@resource-id="com.smule.singandroid:id/yesButton"]');
    }
    get check (){
        return $('//*[@resource-id="com.smule.singandroid:id/register_text"]');
    }
    get login (){
        return $(
            '//*[@resource-id="com.smule.singandroid:id/email_button_view"]'
          );
    }
    get enterEmail (){
        return $('//*[@resource-id="com.smule.singandroid:id/editField"]');
    }
    get nextButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/btn_next"]');
    }


    get enterPassword (){
        return $('//*[@text="your password"]');
    }
    get wrongPassAlert (){
        return $('//*[@resource-id="com.smule.singandroid:id/cancel_button"]')
    }
    get enterPasswordAgain (){
        return $('//*[@resource-id="com.smule.singandroid:id/editField"]');
    }
    get next (){
        return $('//*[@text="Next"]');
    }





}

export default new Login();