import { DataTypes } from 'sequelize';
import db from '../db/connect';

const Usuario = db.define('ff_users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },

});

export default Usuario;