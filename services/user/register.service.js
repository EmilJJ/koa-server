import { User } from '../../models';

export default async (payload) => {
  const { username, email, password, type } = payload;
  const { id } = await User.create({ username, email, password, type });

  return id;
};
