const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth')

const Contact = require('../models/contact'); 



/// private route 
router.get('/',auth,async (req,res)=>{
    
    try{
        const contacts =  await Contact.find({user:req.user.id}).sort({date:-1});
        res.json(contacts);

    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('Server Error');

    }
    
    //res.send('Get all contacts');
});



router.post('/',[auth,[

check('name','name is required').not().isEmpty()


]], async(req,res)=>{

    const errors =validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array});
    }

    const {name,email,phone,type}= req.body;

    try{
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user:req.user.id

        });

        const contact = await newContact.save();
        res.json(contact);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }


    //res.send('add contact');
})

router.put('/:id',auth,async(req,res)=>{

    const {name,email,phone,type}=req.body;


    /// build contact object

    const contactFields ={};
    if(name)contactFields.name=name;
    if(email)contactFields.email=email;
    if(phone)contactFields.phone=phone;
    if(type)contactFields.type=type;

    try{
        
        let contact =await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({msg:'Contact not found'});

        if(contact.user.toString()!==req.user.id){
            return res.status(401).json({msg:'Not Authorised'})

        }

        contact = await Contact.findByIdAndUpdate(req.params.id,
            {$set:contactFields},
            {new:true})

           // console.log(contact)
            res.json(contact);

    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");

    }


    ///res.send('Update contacts')
})

router.delete('/:id',auth,async(req,res)=>{

    try{
        
        let contact =await Contact.findById(req.params.id);

        if(!contact) return res.status(404).json({msg:'Contact not found'});

        if(contact.user.toString()!==req.user.id){
            return res.status(401).json({msg:'Not Authorised'})

        }

        await Contact.findByIdAndRemove(req.params.id);

            //console.log(contact)
            res.json({msg:"contact removed"});

    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send("Server Error");

    }


    //res.send('Delete contact')
})

module.exports = router;

