import DataType from 'sequelize';
import Model from '../sequelize.js';

const User = Model.define(
  'User',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },
    email: {
      type: DataType.STRING(255),
      validate: { isEmail: true },
    },
    phone: {
      type: DataType.STRING(255),
    },
    first_name: {
      type: DataType.STRING(255),
    },
    last_name: {
      type: DataType.STRING(255),
    },
  },
  {
    indexes: [{ fields: ['email'] }],
  },
);

export default User;