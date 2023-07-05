const mongoose = require("mongoose")

    const hotelSchema = new mongoose.Schema({

        name : {
            type: String,
            require: true
        },
        desc : {
            type:String,
            require:true
        },
        city : {
            type: String,
            require: true
        },
        distance : {
            type:String,
            require:true
        },
        photos : {
            type: [String],//çoklu veri
            
        },
        address : {
            type:String,
            require:true
        },
        type : {
            type: [String],//çoklu veri
            
        },
        title : {
            type:String,
            require:true
        },
        rating : {
            type:Number,
            min:0,
            max:5
        },
        rooms : {
            type:[String],
            require:true
        },
        featured : {
            type:Boolean,
            default:false
        },
        cheapesPrice : {
            type:Number,
            required:false
        }
    })

    module.exports = mongoose.model("Hotel",hotelSchema)
    