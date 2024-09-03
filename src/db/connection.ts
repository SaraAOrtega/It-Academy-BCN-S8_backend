import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sprint_8_db', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });

  export default sequelize; 