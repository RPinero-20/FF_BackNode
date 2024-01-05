import { Request, Response } from "express";
import { adminProducts } from "../models/admin";
import { json } from "sequelize";


export const getProducts = async (_req: Request, res: Response) => {
    console.log('POR AQUI PASÓ!')
    try {
        const productList = await adminProducts.findAll();
        res.json(productList);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: ' Internal Server Error'
        });
    }
};


export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try{
        const productDetail = await adminProducts.findByPk( id );
        if ( productDetail ) {
            res.json( productDetail );
        } else {
            res.status(404).json({
                msg: `Producto no encontrado: ${ id } `,
            });
        }
    } catch {
        res.status(500).json({
            Error: 'Internal Server Error'
        }); return

    }
}

async function getProductByCode(productCode:string) {
    const productToEdit = await adminProducts.findOne({
        where: {
            code: productCode
        }
    });
    return productToEdit
}

export const putProductToEdit = async (req: Request, res: Response) => {
    const { code } = req.params;
    const { body } = req;

    try {
        const productToEdit = await getProductByCode( code );
        console.log(productToEdit)
        if ( !productToEdit ) {
            res.status(404).json({
                Error: 'No existe Producto con Código: ' + code
            }); return
        }

        await productToEdit.update( body );
        res.json( productToEdit );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Internal Server Error.'
        });
    }
}


export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    try {

        const existCode = await adminProducts.findOne({
            where: {
                code: body.code
            }
        });

        if (existCode) {
            res.status(400).json({
                msg: 'Código de producto ya existe. ' + body.code
            }); return
        }

        const productData = await adminProducts.create(body);
        res.json( productData );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Error interno contacte al administrador.'
        });
    }

}


export const deleteProducts = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteProduct = await adminProducts.findByPk( id );
    if ( !deleteProduct ) {
        res.status(404).json({
            msg: 'No se encuentra el producto indicado: ' + id
        });
    } else {
        await deleteProduct.destroy({
            // where: {
            //     id: id
            // }
        });
        res.status(200).json({
            Message: 'Registro eliminado.'
        });
    }
}