import LoginFacade from "../../facade/login/login.facade";
import LoginController from "../../controller/login/login.controller";
import ProductFacade from "../../facade/product/product.facade";
import { PRODUCT_TO_CART } from "../../data/product/product.data";

describe("Product", () => {
  before(async () => {
    LoginController.resetScene();
    await LoginFacade.loginVerifiedUser("standard_user", "secret_sauce");
  });
  it("C2 - Add product to cart", async () => {
    await ProductFacade.addSpecificProductToCart(PRODUCT_TO_CART);
  });
});
