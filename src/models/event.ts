import { DataTypes, Model } from 'sequelize';
import db from '../db/connection';

class Event extends Model {
  public id_event!: number;
  public name_event!: string;
  public date_event!: Date;
 
}

Event.init({
  id_event: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name_event: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_event: {
    type: DataTypes.DATE,
    allowNull: false
  },
  
}, {
  sequelize: db,
  modelName: 'Event',
  tableName: 'events', 
  timestamps: false
});

export default Event;