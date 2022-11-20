import { Request, Response, NextFunction } from 'express';

export interface IApiResponse {
  req: Request;
  res: Response;
  next: NextFunction;
}
