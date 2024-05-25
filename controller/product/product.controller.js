import ProductPage from "../../pages/product/product.page";
import {
  click,
  expectDisplayed,
  scrollDownTo,
  isExist,
  getNumber,
} from "../../helper";
import BaseController from "../base.controller";
import { DEFAULT_VERY_SHORT_WAIT } from "../../constant/time.constant";

class ProductController extends BaseController {
  // FUNCTIONS or ACTIONS
  async addSpecificProductToCart(productName) {
    const elementTarget =
      ProductPage.BUTTON_ADD_SPECIFIC_PRODUCT_TO_CART(productName);
    await scrollDownTo(elementTarget);
    await click(elementTarget);
  }

  async getCartAmount() {
    if (await isExist(ProductPage.CART_COUNT(), DEFAULT_VERY_SHORT_WAIT)) {
      return await getNumber(ProductPage.CART_COUNT());
    } else {
      return 0;
    }
  }

  // ASSERTION
  async assertElementOnProductPage() {
    await expectDisplayed(ProductPage.CART_IMAGE);
    await expectDisplayed(ProductPage.BUTTON_ADD_TO_CART);
  }
}

export default new ProductController();
