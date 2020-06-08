import { Request, Response } from 'express';
import Logger from '../logger';

export const saveDeviceRule = (req: Request, res: Response) => {
  Logger.info(req.body);
  res.status(200);
  res.send();
};

export const getDeviceRules = (req: Request, res: Response) => {
  Logger.info(req.body);
  res.status(200);
  res.send();
};
