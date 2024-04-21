import { type Request, type Response } from 'express';

import responseUtils from '@utils/response.utils';

const getTunnel = (req: Request, res: Response): Response => {
  try {
    const { port: number, subdomain: string, } = req.body;
    let data: object;
    return responseUtils.success(res, data);
  } catch (e) {
    console.log(e);

    return responseUtils.error(res, e as Error);
  }
};

export default {
  getTunnel
};
