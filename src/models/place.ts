import { DataTypes, Model } from 'sequelize';
import db from '../db/connection';

class Place extends Model {
  public id_place!: number;
  public latitud!: string;
  public longitud!: string;
  public category_place!: string;
}

Place.init({
  id_place: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  latitud: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longitud: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Place',
  tableName: 'places', 
  timestamps: false
});

export default Place;