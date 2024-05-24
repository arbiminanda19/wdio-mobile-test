import LoginFacade from "../../facade/login/login.facade";
import LoginController from "../../controller/login/login.controller";

describe("Login", () => {
  before(async () => {
    LoginController.resetScene();
  });
  it("C1 - Ensure verified user successfully login", async () => {
    await LoginFacade.loginVerifiedUser("standard_user", "secret_sauce");
  });
});
