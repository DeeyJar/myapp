const Accounts= require('../models/CreateAccount-model');
const bcryptjs=require('bcryptjs')
const {validationResult } = require('express-validator');
const key = require("../auth/secretkey");
const jwt = require("jsonwebtoken");

const AccountCtrl={

    getAll :async(req,res)=>{
        const User=await Accounts.find();
        res.json(User)
    },

    LoginUser: (req,res)=>{
        console.log("req body ",req.body)
        const error=validationResult(req);
        if(!error.isEmpty()){
            return res.status(422).json({error:error.array()})
        }else
            {
                const Email= req.body.Email;
                const Password=req.body.Password;
                Accounts.findOne({Email:Email})
                .then(userfind => {
                if(!userfind){
                    return res.status(401).json({Email:{msg:'Email no existe.'}});
                } else {
                    bcryptjs.compare(Password, userfind.Password)
                    .then(isMatch => {
                        if(isMatch){
                            const payload = {
                                id: userfind._id,
                                Email: userfind.Email
                            }
                            console.log("el payload ",payload);
                            const options = {expiresIn: 259200}
                            jwt.sign(
                                payload,
                                key.secretOrKey,
                                options,
                                (err, token) => {
                                    if (err){
                                        return res.status(503).json({
                                            logged_in: false,
                                            token: 'There was an error logging in. Please try again in a few minutes.'}
                                            );
                                    } else {
                                        res.json({
                                            logged_in:true,
                                            token: token,
                                        })
                                    }
                                }
                            )
                        }else{
                            return res.status(401).json({Password:{msg:'Password incorrecto.'}});
                        }
                        
                    })
                }
            })
            .catch(err => {
                return res.send(err)
            })
            }
    },
    register : (req,res)=>{
        
        const error=validationResult(req)
            if(!error.isEmpty()){
                return res.status(422).json({error:error.array()})
            }else
                {

                    const newUser= new Accounts(req.body)
                    if(!req.body.Username) newUser.Username= newUser.email;

                        bcryptjs.genSalt(10,(err,salt)=>{
                        bcryptjs.hash(newUser.Password,salt,(err,hash)=>{
                        if(err) throw err;
                        console.log("USUARIONUEVO",newUser);
                        newUser.Password=hash;
                        newUser
                            .save()
                            .then(user=>res.json(user+ "USUARIO CREADO"))
                            .catch(err=>res.json(err +"ERROR"))
                        })
                    })

                }
    }
}

module.exports=AccountCtrl;
