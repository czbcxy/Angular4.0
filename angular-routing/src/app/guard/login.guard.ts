import {CanActivate} from "@angular/router";

export class LoginGuard implements CanActivate {
    canActivate() {
        let loginedIn: boolean = Math.random() < 0.5;
        if (!loginedIn) {
            console.log("用户未登录");
        }
        return loginedIn;
    }

}