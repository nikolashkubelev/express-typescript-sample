import express from 'express';
import router from './routes';

class App {
  public express: express.Application;

  // Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.set('port', process.env.PORT || 3000);
    this.express.use(express.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use(router);
  }
}

export default new App().express;