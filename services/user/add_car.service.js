import { Car } from '../../models';

export default async (payload) => {
  const { ownerId, brand, model, productionYear, state } = payload;

  return Car.create({ ownerId, brand, model, productionYear, state });
};
