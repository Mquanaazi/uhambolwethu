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
  let [[checkoutData]] = await pool.query('SELECT * FROM bxu04awdha05fvbqlv16.checkout WHERE checkout_id = ?',[checkout_id])
  
  return checkoutData
     
}

const getCheckoutsDb = async()=>{
  let [checkoutData] = await pool.query('SELECT * FROM bxu04awdha05fvbqlv16.checkout')
  return checkoutData
   
   
}

const createCheckoutDb = async(userID, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status)=>{
  await pool.query(`
    INSERT INTO bxu04awdha05fvbqlv16.checkout (userID, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `,[userID, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status])
}

const deleteCheckoutDb = async(checkout_id)=>{
  await pool.query('DELETE FROM bxu04awdha05fvbqlv16.checkout WHERE checkout_id=?',[checkout_id])
}

const updateCheckoutDb = async(userID, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status, checkout_id)=>{
  let [checkoutData] = await pool.query(`
    UPDATE bxu04awdha05fvbqlv16.checkout 
    SET userID=?, booking_type=?, booking_id=?, booking_details=?, total_cost=?, payment_method=?, payment_status=?
    WHERE checkout_id=?
    `,
    [userID, booking_type, booking_id, booking_details, total_cost, payment_method, payment_status, checkout_id])
  return checkoutData
}

// ____________________________________________________________________________________________________________________

export {getCheckoutsDb, getCheckoutDb, createCheckoutDb, deleteCheckoutDb, updateCheckoutDb}