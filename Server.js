import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import conectDB from './Config/db.js';
import authRoutes from './Routes/authRoute.js'
import cors from 'cors'


const app = express()

dotenv.config();


//connectdb
conectDB();

//middle ware
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/auth',authRoutes)

app.get('/', (req,res)=>{
    res.send("<h1>Welcome to ecommerce app </h1>"
    )
})

//Port
 const PORT = process.env.PORT || 8081

 app.listen(PORT,() => {
    console.log(`server running on ${PORT}`);
 })