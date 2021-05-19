import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
// import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import ContractsController from '../controllers/ContractsController';
import GetAllController from '../controllers/GetAllController';

const contractsRouter = Router();
const contractsController = new ContractsController();
const getAllController = new GetAllController();

// contractsRouter.use(isAuthenticated);

contractsRouter.get('/total', getAllController.graphicTotal);

contractsRouter.get('/list', getAllController.list);

contractsRouter.get('/', contractsController.index);

contractsRouter.get(
  '/:id',
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
      owner: Joi.string().uuid().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      code: Joi.string().required(),
      viability: Joi.number().required(),
      status: Joi.number().required(),
      start_date: Joi.string().isoDate().required(),
      expected_finished_date: Joi.string().isoDate().required(),
      finished_date: Joi.string().optional(),
    },
  }),
  contractsController.create,
);

contractsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      viability: Joi.number().required(),
      status: Joi.number().required(),
      finished_date: Joi.string().optional(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  contractsController.update,
);

contractsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  contractsController.delete,
);

export default contractsRouter;
