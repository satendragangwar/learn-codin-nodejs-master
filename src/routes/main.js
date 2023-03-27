const express = require('express');

const routes = express.Router( );

const Detail = require("../models/detail");

const service = require('../models/service')
const contact = require('../models/contact');
const contacts = require('../models/contacts');


routes.get("/gallery",async (req,res)=>{
    const details= await Detail.findOne({"_id" : "62b8a4196fd88b5cda8d8969"})
    res.render("gallery" ,{
        details:details
    })
})

routes.get("/",async (req,res)=>{
    const details= await Detail.findOne({"_id": "62b8a4196fd88b5cda8d8969"})
   
    const services = await service.find()
    // const slides = await slider.find()
    // console.log(slides)
    res.render("index" ,{
        details:details,
        // slides:slides,
        services:services
    })
})

routes.get("/services" , async (req,res)=>{
    const details= await Detail.findOne({"_id": "62b8a4196fd88b5cda8d8969"})
    const services = await service.find()
    res.render("services" ,{
        services:services,
        details:details
    })
})

routes.get("/contact",async (req,res)=>{
    const details= await Detail.findOne({"_id": "62b8a4196fd88b5cda8d8969"})
   
    
    // const slides = await slider.find()
    // console.log(slides)
    res.render("contacts" ,{
        details:details,
        // slides:slides,
        // services:services
    })
})


routes.post("/process-contact-form" , async (req,res)=>{
    console.log("this form is submmitted")

    try{

        const  data = await contact.create(req.body)
        // console.log(data)
        res.redirect("/")

    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }

})

routes.post("/process1-contact-form" , async (req,res)=>{
    console.log("this form is submmitted")

    try{

        const  data = await contacts.create(req.body)
        // console.log(data)
        res.redirect("/")

    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }

})






module.exports = routes 
