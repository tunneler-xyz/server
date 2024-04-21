import { CODE } from '@config/constants/common.constants';
import { type Response } from 'express';

const success = (res: Response, data: object, status: number = CODE.SUCCESS, message: string = 'Success'): Response => {
  return res.status(status).json({
    status,
    message,
    data
  });
};

const error = (res: Response, data: Error | object, status: number = CODE.BAD_REQUEST, message: string = 'Error'): Response => {
  return res.status(status).json({
    status,
    message,
    data
  });
}

export default {
  success,
  error
}
