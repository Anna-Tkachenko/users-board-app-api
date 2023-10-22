import {User, UserCreationAttributes} from "../models";

const getAll = () => {
  return User.findAll();
}

const create = ({ name, carColorId }: UserCreationAttributes) => {
  return User.create({
    name,
    carColorId,
  });
}

const findById = (userId: number) => {
  return User.findByPk(userId);
}

export const UserService = {
  getAll,
  create,
  findById,
};