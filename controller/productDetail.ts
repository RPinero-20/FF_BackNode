import { Request, Response } from "express";
import { productDetails, productImageUrls } from '../models/productDetail'
import { ProductDetail, ProductProps, urlParams } from '../src/types';
import { Op } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { sectionsHome, productsHome } from "../models/home";


export const getProductDetail = async (req: Request, res: Response) => {
    const params: urlParams = req.query;

    if (params != undefined) {
        if ( params.hasOwnProperty( 'id' ) === true && params.hasOwnProperty( 'code' ) === true ) {
            const productID = Number(params.id)
            const productCode: string = params.code ?? ''
            try {
                res.json( await getDetailByIDnCode( productID, productCode ));
            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });
            };
        } else {
            res.status(400).json({ error: 'Producto no encontrado' });
        };
    } else {
        res.status(400).json({ error: 'Page not found' });
    };
}


async function getDetailByIDnCode(productID: number, productCode: string) {
    const pID = productID;
    const pCode = productCode;

    try {
        const pDetail = await productDetails.findOne({
            where: {
                id: pID,
                code: pCode
            }
        });

        if (pDetail !== null) {
            const productDetail: ProductProps = ({
                id: pDetail.dataValues.id.toString(),
                imageUrl: pDetail.dataValues.imageUrl,
                name: pDetail.dataValues.name,
                code: pDetail.dataValues.code,
                description: pDetail.dataValues.description,
                isOffer: pDetail.dataValues.isOffer,
                discount: pDetail.dataValues.discount,
                categoryID: pDetail.dataValues.categoryID.toString(),
                sectionID: pDetail.dataValues.sectionID.toString(),
                price: parseFloat(pDetail.dataValues.price)
            });


            const relatedSection = await sectionsHome.findAll({
                where: {
                    id: productDetail.sectionID
                }
            });
            

            const sectionsToFront = relatedSection.map(section => {
                const newSection = {
                    sectionId: section.dataValues.id.toString(),
                    sectionName: section.dataValues.name,
                    sectionImageUrl: section.dataValues.imageUrl,
                }
                return newSection
            });

            const relatedProducts = await productsHome.findAll({
                where: {
                    sectionID: productDetail.sectionID
                }
            });

            const productsList: Array<ProductProps> = relatedProducts.map(product => {
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

            return { product: productDetail, section: updatedSections[0] };

        } else {

            return null;

        }

    } catch (error) {

        console.error(error);
        return null;

    }
};



// async function getDetailByIDnCode(productID: Number, productCode: String) {
//     const pID = productID
//     const pCode = productCode

//     try {
//         const pDetail = await productDetails.findOne({
//             where: {
//                 id: pID,
//                 code: pCode
//             }

//         });

//         const productDetail: Array<ProductProps> = pDetail.map((product) => ({
//             id: product.dataValues.id.toString(),
//             imageUrl: product.dataValues.imageUrl,
//             name: product.dataValues.name,
//             code: product.dataValues.code,
//             description: product.dataValues.description,
//             isOffer: product.dataValues.isOffer,
//             discount: product.dataValues.discount,
//             categoryID: product.dataValues.categoryID.toString(),
//             sectionID: product.dataValues.sectionID.toString(),
//             price: parseFloat(product.dataValues.price)
//     }));

//         return ({product: productDetail});

//         } catch (error) {
//             console.error(error);
//         return //res.status(500).json({ error: 'Internal Server Error' });

//         }
//     };



