// import {pool} from '../config/config.js'
import {createPool} from 'mysql2/promise'
import {config} from 'dotenv'
config()

const pool=createPool({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database: process.env.DATABASE

})

const getHotelDb = async(hotel_id)=>{
    let [[hotelData]] = await pool.query('SELECT* FROM travel.hotels WHERE hotel_id = ?',[hotel_id])
    return hotelData
     
}
const getHotelsDb = async()=>{
    let [hotelData] = await pool.query('SELECT * FROM travel.hotels')
    return hotelData
   
   
}
const insertHotelDb = async(hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url)=>{
    await pool.query(`
        INSERT INTO travel.hotels(hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url) VALUES(?,?,?,?,?,?,?,?,?,?)
        `,[hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url])
}

const deleteHotelDb = async(hotel_id)=>{
    await pool.query('DELETE FROM travel.hotels WHERE hotel_id=?',[hotel_id])
}
const updateHotelDb = async(hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url,hotel_id)=>{
    let [hotelData] = await pool.query(`
        UPDATE travel.hotels SET hotel_name=?, location=?, rating=?, price_per_night=?, rooms_available=?, check_in_time=?, check_out_time=?, amenities=?, contact_number=?, image_url=?
        WHERE hotel_id=?
        `,
        [hotel_name,location,rating,price_per_night,rooms_available,check_in_time,check_out_time,amenities,contact_number,image_url,hotel_id])
    return hotelData
}
// ____________________________________________________________________________________________________________________
const getFlightDb = async(flight_id)=>{
     let [[flightsData]] = await pool.query('SELECT* FROM travel.flights WHERE flight_id = ?',[flight_id])
    return flightsData
}
const getFlightsDb = async()=>{
    let [flightsData] = await pool.query('SELECT * FROM travel.flights')
    return flightsData
}
const insertFlightDb = async(airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url)=>{
    await pool.query(`
        INSERT INTO travel.flights(airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url) VALUES(?,?,?,?,?,?,?,?,?,?)
        `,[airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url])
}

const deleteFlightDb = async(flight_id)=>{
    await pool.query('DELETE FROM travel.flights WHERE flight_id=?',[flight_id])
}
const updateFlightDb = async(airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url)=>{
    let [flightsData] = await pool.query(`
        UPDATE travel.flights SET airline=?, flight_number=?, departure_city=?, arrival_city=?, departure_time=?, arrival_time=?, duration=?, price=?, seat_class=? ,image_url=?
        WHERE flight_id=?
        `,
        [airline,flight_number,departure_city,arrival_city,departure_time,arrival_time,duration,price,seat_class,image_url,flight_id])
    return flightsData
}
// ____________________________________________________________________________________________________________________

const getCarDb = async(car_id)=>{
   let [[carsData]] = await pool.query('SELECT* FROM travel.cars WHERE car_id = ?',[car_id])
    return carsData
}
const getCarsDb = async()=>{
    let [carsData] = await pool.query('SELECT * FROM travel.cars')
    return carsData
}
const insertCarDb = async(car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url)=>{
    await pool.query(`
        INSERT INTO travel.cars(car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url) VALUES(?,?,?,?,?,?,?,?,?,?)
        `,[car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url])
}

const deleteCarDb = async(car_id)=>{
    await pool.query('DELETE FROM travel.cars WHERE car_id=?',[car_id])
}
const updateCarDb = async(car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url,car_id)=>{
    let [data] = await pool.query(`
        UPDATE travel.cars SET car_make=?, car_model=?, year=?, rental_price_per_day=?, fuel_type=?, transmission=?, seats=?, location=?, availability=?, image_url=?
        WHERE car_id=?
        `,
        [car_make,car_model,year,rental_price_per_day,fuel_type,transmission,seats,location,availability,image_url,car_id])
    return data
}
// ____________________________________________________________________________________________________________________

export {getHotelsDb,getHotelDb,insertHotelDb,deleteHotelDb,updateHotelDb}
export {getFlightsDb,getFlightDb,insertFlightDb,deleteFlightDb,updateFlightDb}
export {getCarDb,getCarsDb,insertCarDb,deleteCarDb,updateCarDb}
