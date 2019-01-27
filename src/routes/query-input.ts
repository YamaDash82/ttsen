import * as Express from 'express';
const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  res.render('query-input.ejs', {});
});

export default router;