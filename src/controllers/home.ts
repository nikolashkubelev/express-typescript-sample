import { Request, Response } from 'express';


export default class HomeController {
  public static index(_req: Request, res: Response): void {
    res.json({
        data: {}
    });
  }
}