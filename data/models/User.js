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
  },
  {
    indexes: [{ fields: ['email'] }],
  },
);

export default User;