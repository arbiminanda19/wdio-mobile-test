import LoginFacade from "../../facade/login/login.facade";
import LoginController from "../../controller/login/login.controller";

describe("Product", () => {
  before(async () => {
    LoginController.resetScene();
    await LoginFacade.loginVerifiedUser("standard_user", "secret_sauce");
  });
  it("C2 - Add cart", async () => {});
});
