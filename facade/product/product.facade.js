import ProductController from "../../controller/product/product.controller";
import { pause, expectGreaterThan } from "../../helper";

class ProductFacade {
  async addSpecificProductToCart(productName) {
    const initialAmount = await ProductController.getCartAmount();
    await ProductController.assertElementOnProductPage();
    await ProductController.addSpecificProductToCart(productName);
    pause();
    const currentAmount = await ProductController.getCartAmount();
    expectGreaterThan(currentAmount, initialAmount);
  }
}

export default new ProductFacade();
