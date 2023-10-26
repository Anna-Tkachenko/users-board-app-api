import { ControllerAction } from '../types';
import { Color } from '../models';

const getAll: ControllerAction = async (req, res) => {
  const {
    offset = '0',
    limit = '10',
    sort = 'id',
  } = req.query;

  if (
    typeof offset !== 'string'
    || typeof limit !== 'string'
    || typeof sort !== 'string'
    || !['id', 'name'].includes(sort)
  ) {
    res.sendStatus(422);
    return;
  }

  // some changes
  const colors = await Color.findAndCountAll({
    offset: +offset,
    limit: +limit,
    order: [
      [sort, 'ASC']
    ]
  });

  res.send(colors);
};

export const ColorsController = {
  getAll,
}