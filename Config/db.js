import mongoose from "mongoose";

 const conectDB =async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
            console.log("connected to Mongodb");
        
        
    } catch (error) {
        console.log(`Error in Mongodb ${error}`);
        
    }
 }
 export default conectDB;