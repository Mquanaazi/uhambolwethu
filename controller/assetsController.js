import {getHotelDb,getHotelsDb,insertHotelDb,deleteHotelDb,updateHotelDb} from '../model/assetsDb.js'
import {getFlightDb,getFlightsDb,insertFlightDb,deleteFlightDb,updateFlightDb} from '../model/assetsDb.js'
import {getCarDb,getCarsDb,insertCarDb,deleteCarDb,updateCarDb} from '../model/assetsDb.js'

// _______________________________________________________________________________________________________________________

const fetchHotel=async (req,res) => {
    res.json(await getHotelDb((req.params.hotel_id)))
    console.log('successfully fetched a single hotel');
       
}
const fetchHotels=async (req,res) => {
    res.send(await getHotelsDb())
    console.log('successfully fetched all hotels 👌');
}   
const insertHotel=async (req,res) => {
    let {hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url} =req.body
        await insertHotelDb(hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url)
        res.send(await getHotelsDb())
    console.log('successfully inserted 👌');
}   
const deleteHotel=async (req,res) => {
    await deleteHotelDb(req.params.hotel_id)
    res.send(await getHotelsDb())
    console.log('successfully deleted 👌');
}   
const updateHotel=async (req,res) => {
    let {hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url}=req.body
    let hotel=await gethotelDb(req.params.hotel_id)
    console.log(hotel)
    
    hotel_name?hotel_name:hotel_name=hotel.hotel_name
    location?location:location=hotel.location
    rating?rating:rating=hotel.rating
    price_per_night?price_per_night:price_per_night=hotel.price_per_night
    rooms_available?rooms_available:rooms_available=hotel.rooms_available
    check_in_time?check_in_time:check_in_time=hotel.check_in_time
    check_out_time?check_out_time:check_out_time=hotel.check_out_time
    amenities?amenities:amenities=hotel.amenities
    contact_number?contact_number:contact_number=hotel.contact_number
    image_url?image_url:image_url=hotel.image_url
      
    await updateHotelDb(hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url,req.params.hotel_id)
    res.send(await getHotelDb())
    console.log('successfully updated 👌');
}   

// _______________________________________________________________________________________________________________________

const fetchFlight=async (req,res) => {
    res.json(await getFlightDb((req.params.flight_id)))
    console.log('successfully fetched a single hotel');
       
}
const fetchFlights=async (req,res) => {
    res.send(await getFlightsDb())
    console.log('successfully fetched all hotels 👌');
}   
const insertFlight=async (req,res) => {
    let {airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url} =req.body
        await insertFlightDb(airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url)
        res.send(await getflightsDb())
    console.log('successfully inserted 👌');
}   
const deleteFlight=async (req,res) => {
    await deleteFlightDb(req.params.flight_id)
    res.send(await getflightsDb())
    console.log('successfully deleted 👌');
}   
const updateFlight=async (req,res) => {
    let {airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url}=req.body
    let flight=await getFlightDb(req.params.flight_id)
    console.log(flight)

    airline?airline:airline=flight.airline
    flight_number?flight_number:flight_number=flight.flight_number
    departure_city?departure_city:departure_city=flight.departure_city
    arrival_city?arrival_city:arrival_city=flight.arrival_city
    departure_time?departure_time:departure_time=flight.departure_time
    arrival_time?arrival_time:arrival_time=flight.arrival_time
    duration?duration:duration=flight.duration
    price?price:price=flight.price
    seat_class?seat_class:seat_class=flight.seat_class
    image_url?image_url:image_url=flight.image_url    

      
    await updateFlightDb(airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url,req.params.flight_id)
    res.send(await getFlightDb())
    console.log('successfully updated 👌');
}   

// _______________________________________________________________________________________________________________________

const fetchCar=async (req,res) => {
    res.json(await getCarDb((req.params.car_id)))
    console.log('successfully fetched a single hotel');
       
}
const fetchCars=async (req,res) => {
    res.send(await getCarsDb())
    console.log('successfully fetched all hotels 👌');
}   
const insertCar=async (req,res) => {
    let {car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url} =req.body
        await insertCarDb(car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url)
        res.send(await getcarsDb())
    console.log('successfully inserted 👌');
}   
const deleteCar=async (req,res) => {
    await deleteCarDb(req.params.car_id)
    res.send(await getcarsDb())
    console.log('successfully deleted 👌');
}   
const updateCar=async (req,res) => {
    let {car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url}=req.body
    let car=await getCarDb(req.params.car_id)
    console.log(car)
    
    car_make?car_make:car_make=car.car_make
    car_model?car_model:car_model=car.car_model
    year?year:year=car.year
    rental_price_per_day?rental_price_per_day:rental_price_per_day=car.rental_price_per_day
    fuel_type?fuel_type:fuel_type=car.fuel_type
    transmission?transmission:transmission=car.transmission
    seats?seats:seats=car.seats
    location?location:location=car.location
    availability?availability:availability=car.availability
    image_url?image_url:image_url=car.image_url
      
    await updateCarDb(car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url,req.params.car_id)
    res.send(await getcarDb())
    console.log('successfully updated 👌');
}   

// _______________________________________________________________________________________________________________________

export {fetchHotel,fetchHotels,insertHotel,deleteHotel,updateHotel}
export {fetchFlight,fetchFlights,insertFlight,deleteFlight,updateFlight}
export {fetchCar,fetchCars,insertCar,deleteCar,updateCar}