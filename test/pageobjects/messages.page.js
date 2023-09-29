class Messages{

    get feedButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]');
    }
    get messageButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/action_message_center"]');
    }
    get checkmessage (){
        return $('//*[@text="Inbox"]');
    }
    get enterDm (){
        return  $('//*[@text="raj123_1"]');
    }
    get checkenterdm (){
        return $('//*[@resource-id="com.smule.singandroid:id/history"]');
    }
    get enteryourmessage(){
        return $('//*[@resource-id="com.smule.singandroid:id/inputBox"]');
    }


    get sendButton (){
        return $('//*[@resource-id="com.smule.singandroid:id/send_button"]');
    }
    get checktext (){
        return  $('//*[@text="Aur ho"]');
    }
    get returnButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/left_button"]');
    }
    get checkHomePage (){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]');
    }


}
export default new Messages();