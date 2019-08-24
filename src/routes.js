import { Router } from 'express';
import User from './app/models/User';

const routes = Router();

routes.get('/users', async (req, res) => {
  const user = await User.create({
    name: 'Walefe',
    email: 'walefe@rocketseat.com.br',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
