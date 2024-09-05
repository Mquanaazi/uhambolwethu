import {compare} from "bcrypt";
import { getUserEmailDb } from "../model/usersDb.js";
import jwt from 'jsonwebtoken'
import {config} from "dotenv"
config()

const verifyUser = async (req, res, next) => {
    const { emailAdd, userPass } = req.body;
    console.log(emailAdd);

    let info = await getUserEmailDb(emailAdd)
    console.log(info);

    if (!info) {
        res.send('User not found');
        return;
    }

    let hashedPassword = info.userPass;
    let result = await compare(userPass, hashedPassword);

    if (result) {
        let token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1h' });
        req.body.token = token;
        console.log(token);

        next();
        return;
    } else {
        res.send('Incorrect password');
    }
}
export{verifyUser}