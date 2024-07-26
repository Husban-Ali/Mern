import express from 'express'
import {registerController, loginController, testController} from '../Controllers/authController.js'; 
import { isAdmin, requireSignin } from '../Middlewares/authMiddleware.js';
//router object
const router = express.Router()


//rejister link
router.post('/register', registerController)

router.get('/test' ,requireSignin,isAdmin, testController)

router.post('/login', loginController)

router.get('/user-auth' , requireSignin, (req,res) => {
    res.status(200).send({ok : true});
})

export default router;