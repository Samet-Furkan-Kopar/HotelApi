const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const register = async(req,res,next) => {

    const {username,password,email} = req.body;

    try {
        const user = await User.findOne(email)
        if(user){
            return res.status(500).json({message : "kullanıcı mevcut"})
        }
        if(password.lenght < 6) res.status(500).json({message : "parolanız çok kısa"})
        const passwordHash = await bcrypt.hash(password,12)

        if(!isMail(email)) res.status(500).json({message: "email formatına uygun değil"})
        const newUser = await User.create({...req.body,password:passwordHash})
        
        const token = await jwt.sign({id : newUser._id, isAdmin: newUser.isAdmin},"SECRET_KEY",{expiresIn : "1h"})

        res.cookie("token",token,{httpOnly:true}).status(201).json({
            token,
            newUser
        })

    } catch (error) {

        res.status(500).json({message:error})
    }
}

const login = async(req,res,next) => {

    const { password,email } = req.body;

    try {
        const user = await User.findOne(email)
        if(!user){
            return res.status(500).json({message : "kullanıcı bulunmamakta"})
        }
        
        const passwordCompare = await bcrypt.compare(password, user.password)

        if(!passwordCompare){
            return res.status(500).json({message: "parolalar eşleşmemekte..."})
        }
        
        const token = await jwt.sign({id : newUser._id, isAdmin: newUser.isAdmin},"SECRET_KEY",{expiresIn : "1h"})

        res.cookie("token",token,{httpOnly:true}).status(200).json({
            token,
            user
        })

    } catch (error) {

        res.status(500).json({message:error})
    }
}

const isMail = (mail) => 
{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if (mail.match(regex))
      {
        return true
     }
      else {
           return false
     }
    
    
}


module.exports = {register,login}