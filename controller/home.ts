import { Request, Response } from 'express';
import { sectionsHome, productsHome } from '../models/home';
import { Model } from 'sequelize-typescript';
import { ProductProps } from '../src/types';
import { parse } from 'dotenv';

async function getHomeSections() {
    const sectionsFromDB = await sectionsHome.findAll();
    return sectionsFromDB
}


async function getHomeProducts() {
    const productList = await productsHome.findAll();
    return productList
}


// #######################################################################
// ####################################################################### FIN DE CÓDIGO DE PRUEBA
// #######################################################################


// async function getHomeSections() {
//     const sectionsFromDB = await sectionsHome.findAll({
//         where: {
//             id: 1 //seteado para traer solo una sección
//         }
//     });

// const sectionsToFront = [ sectionsFromDB.map(sectionsFromDB => sectionsFromDB.dataValues) ]
// const sections = {
//     sectionId: sectionsFromDB.id,
//     sectionName: sectionsFromDB.name,
//     sectionImageUrl: sectionsFromDB.imageUrl,
//     productList: sectionsFromDB.productList,
// }

//     return sectionsFromDB
// }


// async function getHomeProducts(getHomeSections: Model<any, any>[]) {
//     const productPromises = getHomeSections.map(async (element) => {
//         // console.log("::::::: ", element)
//         const productList = await productsHome.findAll({
//             where: {
//                 sectionID: element.dataValues.id,
//             },
//         });
//         // console.log(productList)
//         const temporal = {
//             ...element.dataValues,
//             productList,
//         };
//         // console.log(temporal);
//         // const objetoNuevo = { ...temporal, id: temporal.id.toString(), price: parseFloat(temporal.price) };
//         // console.log(objetoNuevo);

//         return temporal;
//     });

//     return Promise.all(productPromises);
// }

export const getProducts = async (_req: Request, res: Response) => {
    try {
        const sections = await getHomeSections();
        const products = await getHomeProducts();
        // console.log(sections);
        // console.log(products);



        const sectionsToFront = sections.map(section => {
            const newSection = {
                sectionId: section.dataValues.id.toString(),
                sectionName: section.dataValues.name,
                sectionImageUrl: section.dataValues.imageUrl,
            }
            return newSection
        });
        // console.log(sectionsToFront);

        const productsList: Array<ProductProps> = products.map(product => {
            const productsToFront = {
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
            }
            return productsToFront
        });

        const updatedSections = sectionsToFront.map(section => {
            const matchingProducts = productsList.filter(product => product.sectionID === section.sectionId);
            return {
                ...section,
                productList: matchingProducts
            };
        });


        // const newProductList = retornarEste[0].productList.map((product: Producto) => ({
        //     ...product,
        //     id: product.id.toString(),
        //     price: parseFloat(product.price)
        // }));

        // console.log(newProductList);



        // retornarEste.forEach(newSectionList => {
        //     console.log('Objeto ', newSectionList);
        //     newSectionList.productList.forEach((newProductList: Producto) => {
        //         console.log(newProductList)
        //     })
        // });


        // const newData = retornarEste.map(item => {
        //     const productList = item.productList.map((product: Producto) => ({
        //         ...product,
        //         price: parseFloat(product.price)
        //     }));

        //     return {
        //         ...item,
        //         productList
        //     };
        // });

        // console.log(JSON.stringify(newData, null, 2));

        res.json(updatedSections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getProductList = async (_req: Request, res: Response) => {
    // Traer lista de productos por categoría
    try {
        const productsFromDb = await getHomeProducts();

        const productsList: Array<ProductProps> = productsFromDb.map((product) => ({
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

        res.json(productsList);
    } catch {
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

