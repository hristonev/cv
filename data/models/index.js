import sequelize from '../sequelize.js';
import User from './User.js';

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { User };