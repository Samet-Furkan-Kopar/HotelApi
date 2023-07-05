const {createHotel,updateHotel,deleteHotel,getSingleHotel,getAllHotel,typeByCount,typeByCity} = require("../controllers/hotel.js");
const express = require("express");
const {verifyAdmin} = require("../middleware/verify.js")
const router = express.Router();


router.post("/createHotel",verifyAdmin ,createHotel)
router.put("/updateHotel",verifyAdmin,createHotel)
router.delete("/deleteHotel/:id",verifyAdmin,deleteHotel)
router.get("/getAllHotel",getAllHotel)
router.get("/getSingleHotel/:id",getSingleHotel)
router.get("/typeByCount",createHotel)
router.get("/typeByCity",createHotel)



module.exports = router