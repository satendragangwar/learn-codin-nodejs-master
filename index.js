const express = require('express');
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const routes = require('./src/routes/main')
const Detail = require('./src/models/detail')
const Slider = require("./src/models/slider");
const service = require('./src/models/service');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('' ,routes)
app.use( express.static("public"))



// template engine

app.set('view engine' ,'hbs');
app.set('views' ,'views')
hbs.registerPartials("views/partials")

app.get("/" ,(req,res)=>{
    res.send("wow data from server");

})
// db connection
mongoose.connect("mongodb+srv://satendra_gangwar:Sattu4455@cluster0.yhjet.mongodb.net/?retryWrites=true&w=majority",()=>{

    console.log(" db connected")

    // service.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Courses ',
    //         description:'We provide best courses that help student in placement',
    //         linktext:'https://www.instagram.com',
    //         link:'check'
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'learn projects ',
    //         description:'We provide best courses that help student in placement',
    //         linktext:'https://www.instagram.com',
    //         link:'learn'
    //     },
    //     {
    //         icon:'fab fa-adversal',
    //         title:'our communities ',
    //         description:'We provide best courses that help student in placement',
    //         linktext:'https://www.instagram.com',
    //         link:'check'
    //     }

    // ])
    // Slider.create([
    //     {
    //         title:'LEarn jav in very easy way',
    //         subtitle:"java is the most power full language",
    //         imageurl:"/image/pexels-kevin-ku-577585.jpg"
    //     },
    //     {
    //         title:'what is  Django in python',
    //         subtitle:"Django is framework of python",
    //         imageurl:"/image/pexels-christina-morillo-1181244.jpg"
    //     },
    //     {
    //         title:'what is express',
    //         subtitle:"express is a  framework of nodejs",
    //         imageurl:"/image/pexels-markus-spiske-2004161.jpg"
    //     }
    // ])


    //   Detail.create({

    //     brandName: "saten technical solution",
    //     links : [
    //         {
    //             label : "Home",
    //             url : "/"
    //         },
    //         {
    //             label : "Services",
    //             url : "/services"
    //         },
            
           
    //         {
    //             label:"Contact us",
    //             url : "/contact"
    //         }

    //     ]
    
    // })
})
app.listen(port,()=>{
    console.log("connected")
})

