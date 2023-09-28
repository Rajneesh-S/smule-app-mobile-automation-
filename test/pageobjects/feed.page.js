class feed{
    get feedButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]');
    }
    get  feed(){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]');
    }
    get  feedcheck (){
        return $('//*[@resource-id="com.smule.singandroid:id/title_container"]');
    }
    get startButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/action_button"]');
    }
    get invitefriend (){
        return $('//*[@text="Invite Friends"]');
    }
    get returnButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/left_button"]');
    }

    get returnButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/left_button"]');
    }

    scroll = async()=>{
        await $(
            'android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)'
          );
    }
}
export default new feed();
