import { getCookie} from "./cookies.js";

export default function checkCookie() {
    let user = getCookie("token");
	if (user != "") {
	} else {
		window.location.href="../../";
	}
}