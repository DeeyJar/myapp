const passport= require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const usuarioModel= require('../models/CreateAccount-model');

passport.use(new GoogleStrategy({
    clientID:"213577496742-kte13kljn526f7pjnoq051dcr5o8gmfg.apps.googleusercontent.com",
    clientSecret:"zEqj6I5d5_UamY8lu8XOGCup",
    callbackURL:"http://localhost:8080/api/auth/google/callback"
},
    function(accessToken,refreshToekn,profile,cb){
        console.log(profile);
        //cb= callback
        cb(null,profile)
        
    }
))