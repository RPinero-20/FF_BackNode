import { DataType, Max } from 'sequelize-typescript';
import db from '../db/connect';


export const sectionsHome = db.define('ff_sections', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    imageUrl: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});


export const adminProducts = db.define('ff_products', {
    id: {
        primaryKey: true,
        type: DataType.STRING
    },
    imageUrl: {
        type: DataType.STRING
    },
    name: {
        type: DataType.STRING
    },
    code: {
        type: DataType.STRING
    },
    type: {
        type: DataType.STRING
    },
    byWeight: {
        type: DataType.BOOLEAN
    },
    weightPerUnit: {
        type: DataType.FLOAT
    },
    weightPerBox: {
        type: DataType.FLOAT,
    },
    byUnit: {
        type: DataType.BOOLEAN
    },
    unitQty: {
        type: DataType.INTEGER
    },
    unitPerBox: {
        type: DataType.INTEGER
    },
    description: {
        type: DataType.STRING
    },
    isOffer: {
        type: DataType.BOOLEAN
    },
    isFree: {
        type: DataType.BOOLEAN
    },
    isOutStock: {
        type: DataType.BOOLEAN
    },
    discount: {
        type: DataType.NUMBER
    },
    categoryID: {
        type: DataType.INTEGER
    },
    sectionID: {
        type: DataType.INTEGER
    },
    price: {
        type: DataType.DECIMAL
    },
}, {
    timestamps: false
});

// export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

// export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
