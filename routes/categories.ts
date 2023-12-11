import { Router } from "express";
import { getCategories } from "../controller/categories";

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories );


export default categoriesRouter;