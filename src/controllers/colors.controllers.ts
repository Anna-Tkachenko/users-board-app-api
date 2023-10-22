import { ControllerAction } from '../types';
import { ColorService } from '../services/colors.service';

const getAll: ControllerAction = async (req, res) => {
  const colors = await ColorService.getAll();

  res.send(colors);
};

export const ColorsController = {
  getAll,
}