class Songbook{

    get feedButton  (){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]');
    }
    get customizeButton  (){
        return $('//*[@resource-id="com.smule.singandroid:id/category_filter_button"]');
    }
    get check (){
        return $('//*[@resource-id="com.smule.singandroid:id/title_container"]');
    }
    get backButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/left_button"]');
    }
    get freebutton (){
        return  $ ('//*[@text="Free"]');
    }
    get freecheck (){
        return $ ('//*[@text="Recommended"]');
    }


    get singButton (){
        return $ ('//*[@resource-id="com.smule.singandroid:id/sing_button"]');
    }
    get soloButton (){
        return $ ('//*[@resource-id="com.smule.singandroid:id/rec_type_solo_container"]');
    }
    get audioButton (){
        return $('//*[@text="Audio"]');
    }
    get start (){
        return $('//*[@text="Sing Full Song"]');
    }


}
export default new Songbook();