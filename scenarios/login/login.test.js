import LoginFacade from "../../facade/login/login.facade";

describe("Login", () => {
  it("C1 - Ensure verified user successfully login", async () => {
    await LoginFacade.loginVerifiedUser("standard_user", "secret_sauce");
  });
});
