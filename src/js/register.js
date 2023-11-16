import { postBiasa } from "./api.js";
import { setInner,getValue } from "./element.js";

export default function RegistrasiUser(){
    let target_url = "https://asia-southeast2-annular-hexagon-401501.cloudfunctions.net/signup-fancy-baru";
    let datainjson = {
        "username": getValue("usernamesignup"),
        "password": getValue("passwordsignup")
    }
    postBiasa(target_url,datainjson,responseData);
}

function responseData(result) {
    setInner("message", result.message);
    if (result.message == "Username telah dipakai") {
        alert("Username telah dipakai");
    }
    if (result.message == "Gagal Hash Password") {
        alert("Gagal Hash Password");
    }
    if (result.message == "Berhasil Input data") {
        alert("Berhasil Registrasi");
    }
}