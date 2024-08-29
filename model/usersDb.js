import pool from '../config/config.js'

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM travel.users')
    return data
}
const getUserDb = async(userID)=>{
    let [[data]] = await pool.query('SELECT * FROM travel.users WHERE userID = ?',[userID])
    return data
}
// console.log(await getUserDb(1))

const insertUserDb = async(firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass)=>{
    let [data] = await pool.query(`
        INSERT INTO travel.users(firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass) VALUES(?,?,?,?,?,?,?,?)
        `,[firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass])
    return data
}
const deleteUserDb = async(userID)=>{
    await pool.query('DELETE FROM travel.users WHERE userID=?',[userID])
}
const updateUserDb = async(firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass,userID)=>{

    console.log(userID);
    
    let [data] = await pool.query(`
        UPDATE travel.users SET firstName=?,lastName=?, userAge=?, Gender=?, userRole=?, emailAdd=?, image_url=?, userPass=?
        WHERE userID=?
        `,
        [firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass,userID])
    return data
}
export {getUsersDb,getUserDb,insertUserDb,deleteUserDb,updateUserDb}
