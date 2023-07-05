const express  = require("express");
const cors  = require("cors");
const cookieParser  = require("cookie-parser");
const bodyParser  = require("body-parser");
const dotenv  = require("dotenv");
const db = require("./config/db.js")
const authRoutes = require("./routes/auth.js")
const hotelRoutes = require("./routes/hotel.js")
const roomRoutes = require("./routes/room.js")
const userRoutes = require("./routes/user.js")
dotenv.config();//dotenv diğer sayfalarda aktif olabilmesi için


const app = express();
app.use(cors()) 
app.use(bodyParser.json({limit:"30 mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30 mb", extended:true}))
app.use(cookieParser()) 

app.use("/user",authRoutes)
app.use("/hotel",hotelRoutes)
app.use("/room",roomRoutes)
app.use("/user",userRoutes)

db();


app.listen(process.env.Port,()=>{
    console.log("server is running on port: ",process.env.Port)
})
