import { Router } from "express";
import { getProducts } from "../controller/home";
import { getProductDetail } from "../controller/productDetail";
import { getCategories } from "../controller/categories";
import { getFnToFind } from "../controller/productsList";
import { conectToDB } from "../db/connect";
import { ClientURLS } from "../src/types";

const clientRouter = Router();

const homeUrl: ClientURLS = '/home';
const categories: ClientURLS = '/categories';
const productsList: ClientURLS = '/productsList';
const productDetail: ClientURLS = '/productDetail';

clientRouter.use((_req, _res, next) => {
    conectToDB();
    next();
});

// home page
clientRouter.get(homeUrl, getProducts);

// product detail page
clientRouter.get(categories, getCategories);
clientRouter.get(productsList, getFnToFind);
clientRouter.get(productDetail, getProductDetail);

export default clientRouter;



// const homeRouter = Router();

// homeRouter.get('/', getProducts );
// homeRouter.get('/api/client/categories', getCategories );
// homeRouter.get('/api/client/product/:id', getProduct );

// export default homeRouter;
