import { Router } from "express";
import { getProducts, getProductDetail } from "../controller/home";
import { getCategories } from "../controller/categories";
import { getProductsByCategory, getProductsByName } from "../controller/productsList"
import { conectToDB } from "../db/connect";
import { ClientURLS } from "../src/types";

const clientRouter = Router();

const homeUrl: ClientURLS = '/home';
const categories: ClientURLS = '/categories';
const productsList: ClientURLS = '/productsList';
const productsListName: ClientURLS = '/productsList/:name';
const productDetail: ClientURLS = '/productDetail/:id';

clientRouter.use((_req, _res, next) => {
    conectToDB();
    next();
});

// home page
clientRouter.get(homeUrl, getProducts);

// product detail page
clientRouter.get(categories, getCategories);
clientRouter.get(productsList, getProductsByCategory)
clientRouter.get(productsListName, getProductsByName)
clientRouter.get(productDetail, getProductDetail);

export default clientRouter;



// const homeRouter = Router();

// homeRouter.get('/', getProducts );
// homeRouter.get('/api/client/categories', getCategories );
// homeRouter.get('/api/client/product/:id', getProduct );

// export default homeRouter;
