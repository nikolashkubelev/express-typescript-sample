import express, { Request, Response } from 'express';
import sources from './sources';
import HomeController from './controllers/home';


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
 * GET /
 * Home
 */
router.get(sources.home, HomeController.index);


export default router;