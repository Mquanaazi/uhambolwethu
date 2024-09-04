import {compare} from "bcrypt";
import { getUserEmailDb } from "../model/usersDb.js";
import jwt from 'jsonwebtoken'
import {config} from "dotenv"
config()

const  verifyUser= async(req,res,next)=>{
    const {emailAdd,userPass}=req.body;
    console.log(emailAdd);
    
    let info = await getUserEmailDb(emailAdd)
    console.log(info);
    
    let hashedPassword = info.userPass
    // console.log(hashedPassword);
    
    
    let result = await compare(userPass,hashedPassword)
    if(result==true){
        let token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
        req.body.token = token
        console.log(token);
        
        next()
            return 
        }else
        res.send('incorrect password')
   
    }
export{verifyUser}