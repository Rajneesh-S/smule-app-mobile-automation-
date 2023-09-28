class Profile{

    get feedButton (){
        return $(
            '//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]'
          );
    }
    get profile (){
        return $(
            '//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]'
          );
    }
    get editprofileButton (){
        return $(
            '//*[@resource-id="com.smule.singandroid:id/btn_edit_profile"]'
          );
    }
    get aboutButton (){
        return $('//*[@text="About"]');
    }
    get checktext (){
        return $('//*[@text="Bookmarked songs"]');
    }
    get editButton (){
        return  $(
            '//*[@resource-id="com.smule.singandroid:id/btn_edit_profile"]'
          );
    }


    get editBio (){
        return $('//*[@resource-id="com.smule.singandroid:id/edit_bio"]')
    }
    get saveButton (){
        return $('//*[@text="Save"]');
    }
    get menuButton (){
        return $(
            '//*[@resource-id="com.smule.singandroid:id/btn_menu"]'
          );
    }
    get menuChecker (){
        return $('//*[@text="Edit Profile"]');
    }

    scroll = async()=>{
        await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Bio")'
          );
    }

}
export default new Profile();