import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import profileRouter from '@modules/users/routes/profile.routes';
import contractsRouter from '@modules/contracts/routes/contracts.routes';
import customersRouter from '@modules/customers/routes/customers.routes';

const routes = Router();

routes.use('/customers', customersRouter);
routes.use('/contracts', contractsRouter);
routes.use('/profile', profileRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);

export default routes;
