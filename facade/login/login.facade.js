import LoginController from "../../controller/login/login.controller";
import { pause } from "../../helper";

class LoginFacade {
  async loginVerifiedUser(username, password) {
    await LoginController.assertElementOnLoginPage();
    await LoginController.fillFieldEmailPassword(username, password);
    await LoginController.clickLoginButton();
    pause();
  }
}

export default new LoginFacade();
