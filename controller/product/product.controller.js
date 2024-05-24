import ProductPage from "../../pages/product/product.page";
import { click, expectDisplayed, scrollDownTo } from "../../helper";
import BaseController from "../base.controller";

class ProductController extends BaseController {
  // FUNCTIONS or ACTIONS
  async addSpecificProductToCart(productName) {
    const elementTarget =
      ProductPage.BUTTON_ADD_SPECIFIC_PRODUCT_TO_CART(productName);
    await scrollDownTo(elementTarget);
    await click(elementTarget);
  }

  // ASSERTION
  async assertElementOnProductPage() {
    await expectDisplayed(ProductPage.CART_IMAGE);
    await expectDisplayed(ProductPage.BUTTON_ADD_TO_CART);
  }
}

export default new ProductController();
