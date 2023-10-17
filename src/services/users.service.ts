import { User } from '../types';

const users = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

function getMaxId(elements: User[]): number {
  const ids = elements.map(({ id }) => id);

  return Math.max(...ids) + 1;
}

const getAll = () => {
  return users;
}

const create = ({ name, carColorId }: Omit<User, 'id'>) => {
  const newUser = {
    id: getMaxId(users),
    name,
    carColorId,
  };

  users.push(newUser);

  return newUser;
}

const findById = (userId: number): User | undefined => {
  return users.find(({ id }) => id === userId);
}

export const UserService = {
  getAll,
  create,
  findById,
};