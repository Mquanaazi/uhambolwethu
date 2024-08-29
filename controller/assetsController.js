import {gethotelDb,gethotelsDb,inserthotelDb,deletehotelDb,updatehotelDb} from '../model/assetsDb.js'
import {getflightDb,getflightsDb,insertflightDb,deleteflightDb,updateflightDb} from '../model/assetsDb.js'
import {getcarDb,getcarsDb,insertcarDb,deletecarDb,updatecarDb} from '../model/assetsDb.js'

// _______________________________________________________________________________________________________________________

const fetchhotel=async (req,res) => {
    res.json(await gethotelDb((req.params.hotel_id)))
    console.log('yahoo successful fetch1');
       
}
const fetchhotels=async (req,res) => {
    res.send(await gethotelsDb())
    console.log('great work fetch2 👌');
}   
const inserthotel=async (req,res) => {
    let {hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url} =req.body
        await inserthotelDb(hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url)
        res.send(await gethotelsDb())
    console.log('great work insert 👌');
}   
const deletehotel=async (req,res) => {
    await deletehotelDb(req.params.hotel_id)
    res.send(await gethotelsDb())
    console.log('great work delete 👌');
}   
const updatehotel=async (req,res) => {
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
      
    await updatehotelDb(hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url,req.params.hotel_id)
    res.send(await gethotelDb())
    console.log('great work update 👌');
}   

// _______________________________________________________________________________________________________________________

const fetchflight=async (req,res) => {
    res.json(await getflightDb((req.params.flight_id)))
    console.log('yahoo successful fetch1');
       
}
const fetchflights=async (req,res) => {
    res.send(await getflightsDb())
    console.log('great work fetch2 👌');
}   
const insertflight=async (req,res) => {
    let {airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url} =req.body
        await insertflightDb(airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url)
        res.send(await getflightsDb())
    console.log('great work insert 👌');
}   
const deleteflight=async (req,res) => {
    await deleteflightDb(req.params.flight_id)
    res.send(await getflightsDb())
    console.log('great work delete 👌');
}   
const updateflight=async (req,res) => {
    let {airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url}=req.body
    let flight=await getflightDb(req.params.flight_id)
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

      
    await updateflightDb(airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url,req.params.flight_id)
    res.send(await getflightDb())
    console.log('great work update 👌');
}   

// _______________________________________________________________________________________________________________________

const fetchcar=async (req,res) => {
    res.json(await getcarDb((req.params.car_id)))
    console.log('yahoo successful fetch1');
       
}
const fetchcars=async (req,res) => {
    res.send(await getcarsDb())
    console.log('great work fetch2 👌');
}   
const insertcar=async (req,res) => {
    let {car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url} =req.body
        await insertcarDb(car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url)
        res.send(await getcarsDb())
    console.log('great work insert 👌');
}   
const deletecar=async (req,res) => {
    await deletecarDb(req.params.car_id)
    res.send(await getcarsDb())
    console.log('great work delete 👌');
}   
const updatecar=async (req,res) => {
    let {car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url}=req.body
    let car=await getcarDb(req.params.car_id)
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
      
    await updatecarDb(car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url,req.params.car_id)
    res.send(await getcarDb())
    console.log('great work update 👌');
}   

// _______________________________________________________________________________________________________________________

export {fetchhotel,fetchhotels,inserthotel,deletehotel,updatehotel}
export {fetchflight,fetchflights,insertflight,deleteflight,updateflight}
export {fetchcar,fetchcars,insertcar,deletecar,updatecar}