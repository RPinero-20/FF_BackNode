import { DataType } from 'sequelize-typescript';
import db from '../db/connect';

export const categoriesHome = db.define('ff_categories', {
    name: {
        type: DataType.STRING
    },
}, {
    timestamps: false
});
