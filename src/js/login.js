import { postWithToken } from "./api.js";
import { setInner,getValue } from "./element.js";
import { setCookieWithExpireHour } from "./cookies.js";

export default function LoginUser(){
    let target_url = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signin-fancy-baru";
    let tokenkey = "token";
    let tokenvalue = "694e07bfc2793b6dbfb5eef91c646bd7d168e39fabfc704bb13d3edcdbd03cf2"; //publickey
    let datainjson = {
        "username": getValue("usernamelogin"),
        "password": getValue("passwordlogin")
    }

    postWithToken(target_url,tokenkey,tokenvalue,datainjson,responseData);

}

function responseData(result) {
    setInner("message", result.message);
    setCookieWithExpireHour("token", result.token, 2);
    setCookieWithExpireHour("username", getValue("usernamelogin"), 2);
    if (result.message == "Password Salah") {
        alert("Password Salah");
    }
    if (result.message == "Selamat Datang") {
        window.location.href = "./admin/dashboard/";
    }
}