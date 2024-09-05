import { getCheckoutsDb, getCheckoutDb, createCheckoutDb, updateCheckoutDb, deleteCheckoutDb } from '../model/checkoutDb.js';

export async function fetchCheckouts(req, res) {
  try {
    const checkouts = await getCheckoutsDb();
    res.send(checkouts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching checkouts');
  }
}

const fetchCheckout = async (req, res) => {
  res.json(await getCheckoutDb(req.params.checkoutID));
  console.log('successfully fetched a single checkout ');
}

const createCheckout = async (req, res) => {
  let { userId, bookingType, bookingId, bookingDetails, totalCost, paymentMethod, paymentStatus } = req.body;

  await createCheckoutDb(userId, bookingType, bookingId, bookingDetails, totalCost, paymentMethod, paymentStatus);
  console.log('successfully created a checkout ');

  res.send(await getCheckoutsDb());
}

const updateCheckout = async (req, res) => {
  let { userId, bookingType, bookingId, bookingDetails, totalCost, paymentMethod, paymentStatus } = req.body;
  let checkout = await getCheckoutDb(req.params.checkoutID);
  console.log(checkout);

  userId ? userId : userId = checkout.user_id;
  bookingType ? bookingType : bookingType = checkout.booking_type;
  bookingId ? bookingId : bookingId = checkout.booking_id;
  bookingDetails ? bookingDetails : bookingDetails = checkout.booking_details;
  totalCost ? totalCost : totalCost = checkout.total_cost;
  paymentMethod ? paymentMethod : paymentMethod = checkout.payment_method;
  paymentStatus ? paymentStatus : paymentStatus = checkout.payment_status;

  await updateCheckoutDb(userId, bookingType, bookingId, bookingDetails, totalCost, paymentMethod, paymentStatus, req.params.checkoutID);
  res.send(await getCheckoutsDb());
  console.log('successfully updated a checkout ');
}

const deleteCheckout = async (req, res) => {
  await deleteCheckoutDb(req.params.checkoutID);
  res.send(await getCheckoutsDb());
  console.log('successfully deleted a checkout ');
}

export { fetchCheckout, createCheckout, updateCheckout, deleteCheckout };