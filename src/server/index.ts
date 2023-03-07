import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';

export default async function (PORT: string | number) {
  app.use(cors());

  app.listen(PORT, () => {
    console.log('Server listening in port ', PORT);
  });

  app.get('/', (_req: Request, res: Response): void => {
    res.json({ msg: "Hello world, it's a god day to be a alive" });
  });
}
