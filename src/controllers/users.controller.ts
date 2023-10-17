import { ControllerAction } from '../types';
import { UserService } from '../services/users.service';


const getAll: ControllerAction = (req, res) => {
  const users = UserService.getAll();

  res.send(users);
};

const create: ControllerAction = (req, res) => {
  const { name, carColorId } = req.body;

  if (
    typeof name !== 'string'
    || typeof carColorId !== 'number'
  ) {
    res.sendStatus(422);

    return;
  }

  const newUser = UserService.create({
    name,
    carColorId,
  });

  res.status(201);
  res.send(newUser);
};

const getById: ControllerAction = (req, res) => {
  const { userId } = req.params;

  const user = UserService.findById(+userId);

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

