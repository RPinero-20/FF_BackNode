import { Router } from "express";
// import { getProduct, getProducts, postUsuario, putUsuario, deleteUsuario } from "../controller/home";
// import { getCategories } from "../controller/categories";
import { conectToDB } from "../db/connect";
import { AdminURLS } from "../src/types";
import { postProduct, getProducts, putProductToEdit, getProductById, deleteProducts } from "../controller/admin";


const adminRouter = Router();

const homeUrl: AdminURLS = '/home';
const products: AdminURLS = '/products';
const toEdit: AdminURLS = '/products/:code';
const toDetail: AdminURLS = '/productDetail/:id';
const toDelete: AdminURLS = '/deleteProduct/:id';

adminRouter.use((_req, _res, next) => {
    conectToDB();
    next();
});

// home page
// adminRouter.get(homeUrl, getProducts);

// product detail page
// PENDIENTE POR HACER

// Mantenimiento Administrador
adminRouter.get(products, getProducts);
adminRouter.get(toDetail, getProductById);
adminRouter.put(toEdit, putProductToEdit);
adminRouter.post(products, postProduct);
adminRouter.delete(toDelete, deleteProducts);

export default adminRouter;



// const homeRouter = Router();

// homeRouter.get('/', getProducts );
// homeRouter.get('/api/client/categories', getCategories );
// homeRouter.get('/api/client/product/:id', getProduct );

// export default homeRouter;
