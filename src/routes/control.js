const mongoose =  require("mongoose");
const express =  require('express');
const multer = require("multer");
const bycript = require("bcryptjs");
const bodyParser =  require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
// Authorization--------------------
const auth = require("../middleware/auth");
// item schema----------------------
const Item  =  require("../models/model");
// admin schema---------------------
const Admin  =  require("../models/admin");
const { rawListeners, schema } = require("../models/model");
const { handlebars } = require("hbs");
const router = express.Router();



// route for showing create-item page
router.get("/create-item", auth, async(req, res)=>{
    
    try{
        const adminData = req.userData;
        const allItem = await Item.find();
        res.render("create-item",{allItem, adminData});
    }
    catch(error){
        res.render("create-item",{error})
    }
    
});


// create new item-------------------


// file-uploading-functionality
var storage = multer.diskStorage({
    destination: function(req, res,cb){
        // cb= callback
        cb(null,'public/uploads/item')
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({storage: storage})
// creating-new item-------------------------------------------
router.post('/create-item', upload.single('itemImage') ,async(req,res)=>{
        const item = new Item({
            category:req.body.category,
            itemName:req.body.Item_Name,
            serviceProvide:[{steamWash:req.body.steamWash,dryWash:req.body.dryWash,steamIron:req.body.steamIron,dryIron:req.body.dryIron,}],
            image:req.file.filename, 
       });
   try {
     const savedItem = await item.save();
    //  const allItem = await Item.find();
    //  console.log(allItem);
     res.render('create-item',{message:"New Item has been created."});
   } catch (error) {

    res.json({message: error}) 
   }
});

// get a specific post by id

// Delete a specific post by id

// Update a specific post

// getting create-admin page-------------------------
router.get('/create-admin',auth, (req,res)=>{
    const adminData = req.userData;
    res.render("create-admin",{adminData});
})
// getting login page-------------------------
router.get('/login',(req,res)=>{
    res.render('login');
})


//create admin------
router.post('/create-admin', async(req,res)=>{

    const admin = new Admin({
        firstName:req.body.firstName,
        adminRole: req.body.adminRole,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        age: req.body.age,
        password: req.body.password,
   });

   
try {
    
 const savedAdmin = await admin.save();
  // call  a function for generating a jsonwebtoken --------------- 
  const token = await admin.generateAuthToken();
    
  // setting cookie in the browser--------------------
//   res.cookie("jwt",token,{
//       httpOnly:true
//   });
 res.render('create-admin',{message:"New admin has been created."});
 
} 
catch (error) {
  res.send(error)
//   res.json({message: error}) 
 }  
})

// login- functionality----------------
router.post("/login", async(req, res)=>{
    
    const errorMsg = "Invalid Login!!";
    const wrongkeyword =  "Wrong Keywords!!";
    
    try {
        const email  = req.body.loginEmail;
        const password  = req.body.loginpassword;
        console.log(email);
        if(email === "" || password === ""){
            res.render("login",{emptyMsg:"Field is required!!"})
        }
        else{
             // res.write({message:"Successfully logged in.."})
             const userData = await Admin.findOne({email:email});
             console.log(userData);
            // macthing database password and user input password by bycriptjs--------------------
            const isMatch = await bycript.compare(password, userData.password);
            if(isMatch){

          // call  a function for generating a jsonwebtoken  ----------------
            const token = await userData.generateAuthToken();
            // setting cookie in the browser--------------------
            res.cookie("jwt",token, {
                // expires:new Date(Date.now() + 100000000),
                httpOnly:true
            });    
            const logSuccMsg ="welcome"
            res.render("index",{userData,logSuccMsg});
       
        }
        else{
            res.render("login",{wrongkeyword});
        }

        }
    
        
    } catch (error) {
        res.send("login",{errorMsg});
    }
});

// logout functionality--------------------

router.get("/logout", auth, async(req,res)=>{
    try {
        res.clearCookie("jwt");
        console.log("logout success...");
        // await req.userData.save();
        res.render("login");
    } catch (error) {
        res.status(500).send(error)
        
    }
});

// profile-route
router.get("/profile", auth, (req,res)=>{
    const adminData = req.userData;
    res.render("profile",{adminData});
});
// orderlist-route
router.get("/order-list", auth, (req,res)=>{
    const adminData = req.userData;
    res.render("order-list",{adminData});
});
// orderview-route
router.get("/order-view", auth, (req,res)=>{
    const adminData = req.userData;
    res.render("order-view",{adminData});
});
// 404-route
router.get("/404", auth, (req,res)=>{
    res.render('404')
});
// front-end-home-
router.get("/home", async(req,res)=>{

    try{
        const allItem = await Item.find(); 
        res.render("home",{allItem});  
    }
    catch(error){
        res.render("home",{error})
    }
});

router.get("/home")
module.exports =  router;