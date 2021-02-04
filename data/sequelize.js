import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite:database.cv_data', {
  operatorsAliases: Sequelize.Op,
  define: {
    freezeTableName: true,
  },
});

export default sequelize;