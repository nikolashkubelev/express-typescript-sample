import { Request, Response } from 'express';


export default class HomeController {
  public index(_req: Request, res: Response): void {
    res.json({
      data: {}
    });
  }
}