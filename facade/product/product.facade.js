import ProductController from "../../controller/product/product.controller";
import { pause } from "../../helper";

class ProductFacade {
  async addSpecificProductToCart(productName) {
    await ProductController.assertElementOnProductPage();
    pause();
    await ProductController.addSpecificProductToCart(productName);
  }
}

export default new ProductFacade();
