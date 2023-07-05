const {createRoom,deleteRoom,updateRoom,getDetailRoom,getAllRoom} = require("../controllers/room.js")
const express = require("express");
const {verifyAdmin} = require("../middleware/verify.js")

const router = express.Router();

router.get("/getAllRoom",getAllRoom)
router.post("/createRoom/:id/:hotelid",verifyAdmin,createRoom)
router.delete("/deleteRoom/:id/:hotelid",verifyAdmin,deleteRoom)
router.put("/updateRoom/:id",verifyAdmin,updateRoom)
router.get("/getDetailRoom/:id",getDetailRoom)


module.exports = router;

