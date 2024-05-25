import LoginController from "../../controller/login/login.controller";
import ProductController from "../../controller/product/product.controller";
import { pause } from "../../helper";

class LoginFacade {
  async loginVerifiedUser(username, password) {
    await LoginController.assertElementOnLoginPage();
    await LoginController.fillFieldEmailPassword(username, password);
    await LoginController.clickLoginButton();
    pause();
    await ProductController.assertElementOnProductPage();
  }
}

export default new LoginFacade();
