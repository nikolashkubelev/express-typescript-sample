import express, { Application, Router } from 'express';
import router from './routes';


class Example {
  public app: Application;

  constructor(
    private router: Router,
    private express: any // TODO: WTT?
  ) {
    this.init();
    this.config();
    this.middleware();
    this.routes();
  }

  // Init Express
  private init() {
    this.app = this.express();
  }

  // Configure Express.
  private config(): void {
    this.app.set('port', process.env.PORT || 3000);
  }

  // Configure Express middleware.
  private middleware(): void {
    this.app.use(this.express.json());
    this.app.use(this.express.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    this.app.use(this.router);
  }
}


export default new Example(router, express).app;