const mongoose = require("mongoose")

    const roomSchema = new mongoose.Schema({

        title : {
            type: String,
            require: true
        },
        price : {
            type:Number,
            require:true
        },
        city : {
            type: String,
            require: true
        },
        maxPeople : {
            type:Number,
            require:true
        },
        roomNumbers : {
            type: Number,
            unavaliableDates : {
                type:[Date]
            }
            
        }
    },{timestamps: true})

    module.exports = mongoose.model("Room",roomSchema)
    