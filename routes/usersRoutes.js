import express from 'express'
import {fetchUsers,fetchUser,insertUser,deleteUser,updateUser,loginUser} from '../controller/usersController.js'
import {verifyUser} from '../middleware/authenticator.js'

const router=express.Router()
router.post('/login',verifyUser,loginUser)
router.get('/',fetchUsers)
router.post('/',insertUser)

router
    .route('/:userID')
        .get(fetchUser)
        .delete(deleteUser)
        .patch(updateUser)


export default router