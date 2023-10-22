import {Table, Column, Model, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import {Color} from "./Color";

interface UserAttributes {
  id: number;
  name: string;
  carColorId: number;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
  tableName: 'users',
  modelName: 'User',
  timestamps: false,
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column
  name: string;

  @ForeignKey(() => Color)
  @Column
  carColorId: number;

  @BelongsTo(() => Color)
  carColor: Color;
}
