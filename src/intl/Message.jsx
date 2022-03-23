import Session from "../variables/session.jsx";
import en_message from "./en/Message.jsx";
import vn_message from "./vn/Message.jsx";
class Message {
    static data = new Map();

    //TODO: init message EN VN
    static init() {
        this.data.set("en",en_message);
        this.data.set("vn",vn_message);
    }

    static getMessage(locale) {
        return this.data.get(locale);
    }
}

function map(key, locale = Session.getLocale()) {
    let data = Message.getMessage(locale);
    if(data === undefined){
        return key;
    }
    let value = data[key];
    if(value === undefined){
        return key;
    }
    return value;
}

export default Message;
export {map};
