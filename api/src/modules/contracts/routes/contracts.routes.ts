import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import ContractsController from '../controllers/ContractsController';

const contractsRouter = Router();
const contractsController = new ContractsController();

// contractsRouter.use(isAuthenticated);

contractsRouter.get('/', contractsController.index);

contractsRouter.get(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  contractsController.show,
);

contractsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      customer: Joi.string().uuid().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      code: Joi.string().required(),
      viability: Joi.number().required(),
      status: Joi.number().required(),
      start_date: Joi.string().isoDate().required(),
      expected_finished_date: Joi.string().isoDate().required(),
    },
  }),
  contractsController.create,
);

contractsRouter.delete(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  contractsController.delete,
);

export default contractsRouter;
