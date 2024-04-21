import type { NextFunction, Request, Response } from 'express';
import { body, param, validationResult } from 'express-validator';

const validate = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });

    return;
  }

  next();
};

export const createInvoiceValidator = [
  body('recipient').isString(),
  body('token').isString(),
  body('amount').isFloat(),
  body('callbackURL').optional().isURL(),
  body('metadata').optional().isObject(),
  body('description').optional().isString(),
  validate,
];

export const getInvoiceValidator = [param('invoiceId').isUUID(), validate];
