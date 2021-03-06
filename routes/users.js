const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


const User = require('../models/User')




router.post('/',

[
    check('name','please add name')
    .not()
    .isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','length should be greater then 6').isLength({min: 6})

],

  async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
    const {name,email,password} = req.body;

    try{
        let user = await User.findOne({ email });
        if(user)
        return res.status(400).json({msg:"user already exist"});

        user = new User({
            name,
            email
            ,password
        });


        const salt =await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();

        const payload ={
            user:{
                id:user.id
            }
        }

        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn:36000},(err,token)=>{
                if(err) throw err;
                res.json({token});
            }
        );

        //res.send('User saved');

    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');

    }


    //res.send("Passed");
})


module.exports = router;