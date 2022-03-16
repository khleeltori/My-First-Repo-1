const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();

let users =[];

router.post('/register',(req,res)=> {
   // const user_email =req.body.email;
   // const user_password =req.body.password;
const{email,password} =req.body;

users.push({email:email,password:password});
    return res.status(200).json({
        message:users

}); 
})

router.get('/greeting',(req,res) => {
    return res.status(200).json({
        message:"Welcome to my api"
        
    });
});
router.get('/ff',(req,res) => {
    return res.status(200).json({
        message:10*10
        
    });
});

module.exports = router;  //هي اهم نقطة في بناء الموقع ولا يجب نسيها