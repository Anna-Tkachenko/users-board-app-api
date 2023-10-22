import {Color} from "../models";

const getAll = () => {
  return Color.findAll();
}

export const ColorService = {
  getAll,
};