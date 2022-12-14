import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import { NewProduct, Product } from '../utils/interfaces/productsI';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: NewProduct): Promise<Product> {
    const response = await this.model.create(product);
    
    return { ...product, id: response };
  } 
}
