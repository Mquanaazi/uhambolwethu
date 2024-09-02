import express from 'express';
import {fetchHotels,  fetchHotel,  insertHotel,  deleteHotel,  updateHotel} from '../controller/assetsController.js';
import {fetchFlights,  fetchFlight,  insertFlight,  deleteFlight,  updateFlight} from '../controller/assetsController.js';
import {fetchCars,  fetchCar,  insertCar,  deleteCar,  updateCar} from '../controller/assetsController.js';

const router = express.Router();

router.get('/hotels', fetchHotels);
router.get('/flights', fetchFlights);
router.get('/cars', fetchCars);

router.post('/hotel', insertHotel);
router.post('/flight', insertFlight);
router.post('/car', insertCar);

router.get('/hotel/:hotel_id', fetchHotel);
router.delete('/hotel/:hotel_id', deleteHotel);
router.patch('/hotel/:hotel_id', updateHotel);

router.get('/flight/:flightId', fetchFlight);
router.delete('/flight/:flightId', deleteFlight);
router.patch('/flight/:flightId', updateFlight);

router.get('/car/:carId', fetchCar);
router.delete('/car/:carId', deleteCar);
router.patch('/car/:carId', updateCar);

export default router;