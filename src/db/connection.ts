import { Sequelize } from "sequelize";

const sequelize = new Sequelize('employees_db', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });

  export default sequelize; 