import { Request, Response } from "express";
import { productsHome } from "../models/home";
import { ProductProps } from '../src/types';
import { Op } from "sequelize";
import { Sequelize } from "sequelize-typescript";

export const getProductsByCategory = async (req: Request, res: Response) => {
    const catID = req.query
    console.log(catID)

    try {
        console.log(catID)
        const productListByCategory = await productsHome.findAll({
            where: {
                categoryID: catID.category
            }
        });

        const productsList: Array<ProductProps> = productListByCategory.map((product) => ({
            id: product.dataValues.id.toString(),
            imageUrl: product.dataValues.imageUrl,
            name: product.dataValues.name,
            code: product.dataValues.code,
            description: product.dataValues.description,
            isOffer: product.dataValues.isOffer,
            discount: product.dataValues.discount,
            categoryID: product.dataValues.categoryID.toString(),
            sectionID: product.dataValues.sectionID.toString(),
            price: parseFloat(product.dataValues.price)
    }));

        console.log(productsList);
        res.json(productsList);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getProductsByName = async (req: Request, res: Response) => {
    const productName: string = req.params.name
    console.log(productName)
    try {
        const productListByName = await productsHome.findAll({
            where: {
                name: {
                    [Op.like]: '%' + productName + '%'
                }
            }
        });

        const productsList: Array<ProductProps> = productListByName.map((product) => ({
            id: product.dataValues.id.toString(),
            imageUrl: product.dataValues.imageUrl,
            name: product.dataValues.name,
            code: product.dataValues.code,
            description: product.dataValues.description,
            isOffer: product.dataValues.isOffer,
            discount: product.dataValues.discount,
            categoryID: product.dataValues.categoryID.toString(),
            sectionID: product.dataValues.sectionID.toString(),
            price: parseFloat(product.dataValues.price)
    }));

        console.log(productsList);
        res.json(productsList);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};