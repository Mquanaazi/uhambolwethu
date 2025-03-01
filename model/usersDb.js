import pool from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM bxu04awdha05fvbqlv16.users')
    return data
}
const getUserDb = async(userID)=>{
    let [[data]] = await pool.query('SELECT * FROM bxu04awdha05fvbqlv16.users WHERE userID = ?',[userID])
    return data
}
const getUserEmailDb = async(emailAdd)=>{
    let [[data]] = await pool.query('SELECT * FROM bxu04awdha05fvbqlv16.users WHERE emailAdd = ?',[emailAdd])
    return data
}
// console.log(await getUserDb(1))

const insertUserDb = async(firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass)=>{
    let [data] = await pool.query(`
        INSERT INTO bxu04awdha05fvbqlv16.users(firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass) VALUES(?,?,?,?,?,?,?,?)
        `,[firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass])
    return data
}
const deleteUserDb = async (userID) => {
    await pool.query('DELETE FROM bxu04awdha05fvbqlv16.users WHERE userID = ?', [userID])
  }
  
  const updateUserDb = async (firstName, lastName, userAge, Gender, userRole, emailAdd, image_url, userPass, userID) => {
    await pool.query(`
      UPDATE bxu04awdha05fvbqlv16.users SET 
        firstName = ?, 
        lastName = ?, 
        userAge = ?, 
        Gender = ?, 
        userRole = ?, 
        emailAdd = ?, 
        image_url = ?, 
        userPass = ?
      WHERE userID = ?
    `, [firstName, lastName, userAge, Gender, userRole, emailAdd, image_url, userPass, userID])
  }
export {getUsersDb,getUserDb,insertUserDb,deleteUserDb,updateUserDb,getUserEmailDb}
