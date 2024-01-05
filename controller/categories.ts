import { Request, Response } from 'express';
import { categoriesHome } from '../models/categories';


async function getHomeCategories() {
    return await categoriesHome.findAll();
}

export const getCategories = async (_req: Request, res: Response) => {
    try {
        const categories = await getHomeCategories();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
