import { Method } from "./method.cy";

const method = new Method();

export class StepLogin{

    sauceDemo1(){
        method.loginValid();
        method.checkLoginValid();
        method.clickBtn();
        method.verifDashboard();
    }

    sauceDemo2(){
        method.loginInvalid1();
        method.checkLoginInvalid1();
        method.clickBtn();
        method.errorUser1();
    }

    sauceDemo3(){
        method.loginInvalid2();
        method.checkLoginInvalid2();
        method.clickBtn();
        method.errorUser2();
    }
}