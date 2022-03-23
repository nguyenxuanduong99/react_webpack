import * as cookie from "react-cookies";
import {DEFAULT_LOCALE} from "./config";

export default class Session {
    static currentUsername = undefined;
    static currentFullName = undefined;
    static locale = undefined;

    static getCurrentUser() {
        return this.currentUsername;
    }

    static getLocale() {
        if (this.locale === undefined) {
            const locale = cookie.load("locale");
            if (locale !== undefined) {
                this.locale = locale;
            } else {
                this.locale = DEFAULT_LOCALE;
            }
        }
        return this.locale;
    }

    static setLocale(newLanguage) {
        this.locale = newLanguage;
        cookie.save("locale", newLanguage, {path: "/"});
    }
}