import express from 'express';
import { fetchCheckouts, fetchCheckout, createCheckout, updateCheckout, deleteCheckout } from '../controller/checkoutController.js';

const router = express.Router();

router.get('/checkouts', fetchCheckouts);
router.get('/checkout/:checkoutID', fetchCheckout);
router.post('/checkout', createCheckout);
router.put('/checkout/:checkoutID', updateCheckout);
router.delete('/checkout/:checkoutID', deleteCheckout);

export default router;