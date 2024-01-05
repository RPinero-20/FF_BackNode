import { Request, Response } from "express";
import { productsHome } from "../models/home";
import { ProductProps, urlParams } from '../src/types';
import { Op } from "sequelize";
import { Sequelize } from "sequelize-typescript";


function separarPalabras(cadena: string) {
    return cadena.replace(/([a-z])([A-Z])/g, '$1 $2');
}


export const getFnToFind = async (req:Request, res: Response) => {
    const params: urlParams = req.query
    console.log(params)

    if (params !== undefined) {
        if ( params.hasOwnProperty( 'category' ) === true ) {
            const catID = Number(params.category)
            try {
                res.json( await getProductsByCategory( catID ) );
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            };
        } else {
            if ( params.hasOwnProperty( 'search' ) === true ) {
                const searchName: string = params.search ?? '' // Este error ocurre porque TypeScript
                                                                //está siendo estricto en cuanto a los tipos y te está advirtiendo
                                                                // que la variable searchName podría ser undefined en ciertos casos.
                                                                // Para solucionarlo, puedes utilizar una verificación de tipo o
                                                                // un operador de coalescencia nula para asegurarte de que searchName
                                                                // tenga un valor de tipo 'string'.
                try {
                    console.log(searchName)
                    res.json( await getProductsByName( searchName ) );
                } catch (error) {
                    res.status(500).json({ error: 'Internal Server Error' });
                };
            }
        };
    }
}


async function getProductsByCategory( params: Number ) { //= async (req: Request, res: Response) => {
    const catID = params

    try {
        console.log(catID)
        const productListByCategory = await productsHome.findAll({
            where: {
                categoryID: catID
            }
        });

        const productsList: Array<ProductProps> = productListByCategory.map((product) => ({
            id: product.dataValues.id.toString(),
            imageUrl: product.dataValues.imageUrl,
            name: product.dataValues.name,
            code: product.dataValues.code,
            description: product.dataValues.description,
            isOffer: product.dataValues.isOffer,
            // discount: product.dataValues.discount,
            categoryID: product.dataValues.categoryID.toString(),
            sectionID: product.dataValues.sectionID.toString(),
            price: parseFloat(product.dataValues.price)
    }));

        return(productsList);

    } catch (error) {
        console.error(error);
        return // re.status(500).json({ error: 'Internal Server Error' });
    }
};


async function getProductsByName( params: string ) { //= async (req: Request, res: Response) => {
    const productStr: string = params
    const productName = separarPalabras(productStr)

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
            // discount: product.dataValues.discount,
            categoryID: product.dataValues.categoryID.toString(),
            sectionID: product.dataValues.sectionID.toString(),
            price: parseFloat(product.dataValues.price)
        }));

        console.log(productsList);
        return(productsList); // res.json(productsList);

        } catch (error) {
            console.error(error);
            return //res.status(500).json({ error: 'Internal Server Error' });
        }
}
