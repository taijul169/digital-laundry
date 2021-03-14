const { static } = require("express");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bycript = require("bcryptjs");
const bodyParser =  require("body-parser");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const fs  = require("fs");
const controlRoute = require("./routes/control");
const apiRoute = require("./routes/api");
const app = express();
const port = process.env.PORT || 5000;
// admin schema---------------------
const Admin  =  require("./models/admin");
const db = require("./db/connection");
// const Docregistration = require("./models/register");
// const Doctorappointment = require("./models/appointment");
const { handlebars } = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(bodyParser.urlencoded({ extended: false }));           
app.use(bodyParser.json())
// supporting json data
app.use(express.json());
// getting cookie from browser
app.use(cookieParser())
// Middleware----
app.use('/api', apiRoute);
app.use('/admin', controlRoute);


app.use(express.urlencoded({ extended:false}));
app.use('/admin/',express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
 // helper -register
 hbs.registerHelper("adminPower", function(value){
    if(value === 1){
        return new handlebars.SafeString(`<li class="sidebar-item">
        <a class="sidebar-link waves-effect waves-dark sidebar-link" href="create-admin"
            aria-expanded="false">
            <i class="fa fa-info-circle" aria-hidden="true"></i>
            <span class="hide-menu">Create New Admin</span>
        </a>
    </li>`)
    }
})
// home-routing-----------------
app.get("/admin/", auth, (req, res)=>{
    
    const adminData = req.userData;
    res.render("index",{adminData});
});

// create-item-routing-----------------

// home-routing-----------------
// app.get("/create-item",(req, res)=>{
//     res.render("create-item");
// });

app.listen(port, ()=>{
    console.log(`Server is listening from:${port}`);
})


