import { Router } from 'express';

const routes = Router();

routes.get('/users', (req, res) => res.json({ message: 'Hello world.' }));

export default routes;
