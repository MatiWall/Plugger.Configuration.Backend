import { Request, Response } from 'express';
import { readConfig } from '../../services/configService';

export const getConfig = (req: Request, res: Response) => {
  try {
    const config = readConfig('development');
    res.json(config);
  } catch (error) {
    res.status(500).send('Error loading config');
  }
};
