import { ControllerAction } from '../types';
import { UserService } from '../services/users.service';


const getAll: ControllerAction = async (req, res) => {
  const users = await UserService.getAll();

  res.send(users);
};

const create: ControllerAction = async (req, res) => {
  const { name, carColorId } = req.body;

  if (
    typeof name !== 'string'
    || typeof carColorId !== 'number'
  ) {
    res.sendStatus(422);

    return;
  }

  const newUser = await UserService.create({
    name,
    carColorId,
  });

  res.status(201);
  res.send(newUser);
};

const getById: ControllerAction = async (req, res) => {
  const { userId } = req.params;

  const user = await UserService.findById(+userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
};

export const UsersController = {
  getAll,
  create,
  getById,
}

