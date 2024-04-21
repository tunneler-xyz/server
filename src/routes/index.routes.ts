import express from 'express';

import paymentController from '../controllers/payment.controller';
import {
  getInvoiceValidator,
} from './validations/index.validations.routes';

const router = express.Router();

router.get(
  '/invoice/:invoiceId',
  getInvoiceValidator,
  paymentController.getInvoice,
);

export default router;
