import { Router } from "express";
import { getCategories } from "../controller/categories";
import { conectToDB } from "../db/connect";

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories );

categoriesRouter.use((_req, _res, next) => {
    conectToDB();
    next();
});


export default categoriesRouter;
