import LoginPage from "../../pages/login/login.page";
import {
  click,
  pause,
  superLongPause,
  setInputValue,
  clearInputValue,
  expectDisplayed,
  waitForDisplayed,
} from "../../helper";
import BaseController from "../base.controller";

class LoginController extends BaseController {
  // FUNCTIONS or ACTIONS
  resetScene() {
    super.resetApp();
    superLongPause();
  }

  async clearTextInputLoginScene() {
    await waitForDisplayed(LoginPage.TEXT_INPUT_USERNAME);
    await clearInputValue(LoginPage.TEXT_INPUT_USERNAME);
    await clearInputValue(LoginPage.TEXT_INPUT_PASSWORD);
  }

  async fillFieldEmailPassword(email, password) {
    await this.clearTextInputLoginScene();
    await setInputValue(LoginPage.TEXT_INPUT_USERNAME, email);
    await setInputValue(LoginPage.TEXT_INPUT_PASSWORD, password, {
      isSecureTextField: true,
    });
    pause();
  }

  async clickLoginButton() {
    await click(LoginPage.BUTTON_SUBMIT_LOGIN);
  }

  // ASSERTION
  async assertElementOnLoginPage() {
    await expectDisplayed(LoginPage.TEXT_INPUT_USERNAME);
    await expectDisplayed(LoginPage.TEXT_INPUT_PASSWORD);
    await expectDisplayed(LoginPage.BUTTON_SUBMIT_LOGIN);
  }
}

export default new LoginController();
