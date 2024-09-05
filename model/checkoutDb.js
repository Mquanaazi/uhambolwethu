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

const getCheckoutDb = async(checkout_id)=>{
  console.log(checkout_id);
  let [[checkoutData]] = await pool.query('SELECT * FROM travel.checkout WHERE checkout_id = ?',[checkout_id])
  
  return checkoutData
     
}

const getCheckoutsDb = async()=>{
  let [checkoutData] = await pool.query('SELECT * FROM travel.checkout')
  return checkoutData
   
   
}

const createCheckoutDb = async(user_id, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status)=>{
  await pool.query(`
    INSERT INTO travel.checkout (user_id, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,[user_id, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status])
}

const deleteCheckoutDb = async(checkout_id)=>{
  await pool.query('DELETE FROM travel.checkout WHERE checkout_id=?',[checkout_id])
}

const updateCheckoutDb = async(user_id, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status, checkout_id)=>{
  let [checkoutData] = await pool.query(`
    UPDATE travel.checkout 
    SET user_id=?, booking_type=?, booking_id=?, booking_details=?, total_cost=?, payment_method=?, payment_status=?
    WHERE checkout_id=?
    `,
    [user_id, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status, checkout_id])
  return checkoutData
}

// ____________________________________________________________________________________________________________________

export {getCheckoutsDb, getCheckoutDb, createCheckoutDb, deleteCheckoutDb, updateCheckoutDb}