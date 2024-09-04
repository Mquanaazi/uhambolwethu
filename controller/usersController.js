// import { getUserDb } from '../model/usersDb.js';
import {getUsersDb,getUserDb,insertUserDb,deleteUserDb,updateUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'

const fetchUsers=async (req,res) => {
    res.send(await getUsersDb())
    console.log('successfully fetched all users');
}

const fetchUser=async (req,res) => {
    res.json(await getUserDb(req.params.userID))
    console.log('successfully fetched a single user 👌');
}   

const insertUser=async (req,res) => {
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass} =req.body
    hash(userPass,10,async(err,hashedP)=>{

        if (err) throw err
        console.log(hashedP);
        
        await insertUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,hashedP)
        console.log('successfully inserted a user 👌');
    })

    res.send(await getUsersDb())
}   

const deleteUser=async (req,res) => {
    await deleteUserDb(req.params.userID)
    res.send(await getUsersDb())
    console.log('successfully deleted a user 👌');
}   
const updateUser=async (req,res) => {
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass}=req.body
    let User=await getUserDb(req.params.userID)
    console.log(User)
    
    firstName?firstName :firstName=User.firstName
    lastName?lastName :lastName=User.lastName
    userAge?userAge:userAge=User.userAge
    Gender?Gender :Gender=User.Gender
    userRole?userRole :userRole=User.userRole
    emailAdd?emailAdd:emailAdd=User.emailAdd
    image_url?image_url:image_url=User.image_url
    userPass?userPass:userPass=User.userPass
    
    await updateUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,image_url,userPass,req.params.userID)
    res.send(await getUsersDb())
    console.log('successfully updated a user 👌');
}   
const loginUser= (req,res)=>{
    res.json({message:"You have signed in successfully!",token:req.body.token})
}

export {fetchUsers,fetchUser,insertUser,deleteUser,updateUser,loginUser}