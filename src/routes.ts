import express, { Request, Response } from 'express';
import sources from './sources';
import { homeController } from './controllers';


const router = express.Router();

/**
 * GET /
 * Index
 */
router.get(sources.index, (_req: Request, res: Response) => {
  res.json({
    message: 'Hello World!'
  });
});

/**
 * GET /home
 * Home
 */
router.get(sources.home, homeController.index);


export default router;