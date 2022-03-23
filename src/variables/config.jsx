const detectedUrl = location.protocol + "//" + location.host + "/rest";

const API_URL = detectedUrl;
const API_TIMEOUT = 30000;

const APP_HOMEPAGE = "http://telsoft.com.vn";

const APP_NAME = "MOBIMONEY";

const COMPANY = "MOBIFONE";

const APP_COPYRIGHT = "Copyright by " + COMPANY + ", All right is reserved";

const LOCALE = ["en", "vn"];
const DEFAULT_LOCALE = LOCALE[1];
const BACKGROUND_INTERVAL = 5000;
const DEBUG =   true;

export {
    API_URL,
    API_TIMEOUT,
    APP_HOMEPAGE,
    APP_NAME,
    COMPANY,
    APP_COPYRIGHT,
    LOCALE,
    DEFAULT_LOCALE,
    BACKGROUND_INTERVAL,
    DEBUG
}
