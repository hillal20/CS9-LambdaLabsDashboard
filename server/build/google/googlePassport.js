"use strict";var passport=require("passport"),GoogleStrategy=require("passport-google-oauth20"),keys=require("./keys.js"),GoogleUser=require("./googleModel.js"),_require=require("../MiddleWare/jwtMiddleWare.js"),makeToken=_require.makeToken;passport.serializeUser(function(a,b){b(null,a.id)}),passport.deserializeUser(function(a,b){GoogleUser.findById(a).then(function(a){b(null,a)})}),passport.use(new GoogleStrategy({callbackURL:"/auth/google/callback",clientID:keys.google.clientID,clientSecret:keys.google.clientSecret},function(a,b,c,d){GoogleUser.findOne({googleId:c.id}).then(function(a){if(a)d(null,a);else{var b={username:c.displayName,googleId:c.id},e=new GoogleUser(b);e.save().then(function(a){don(null,a)})}}).catch(function(){})}));