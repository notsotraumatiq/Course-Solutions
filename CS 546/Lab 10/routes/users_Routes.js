const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const users = require('../data/users')


async function loggingMiddleware(req){
    
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log("Current Time Stamp : " + today);
    console.log("Request Method : " + req.method)
    console.log("Request Route : " + req.originalUrl || req.url);
    if (req.session.valid)
        console.log("User is Authenticated");
    else
        console.log("User is not Authenticated");

    console.log("****");
}

async function passGenerator(username){
    //function for user
    const getData = await users.getTheUser(username);
    
    req.body.d
}
async function cheeckAuth(username, password){
    var checkAuth = false;
    //function for user
    const getData = await users.getTheUser(username);
    //console.log(print password)
    checkAuth = await bcrypt.compare(password, getData["hashedPassword"]);

    return checkAuth;

}

router.get("/", async (req, res) =>{
    loggingMiddleware(req);
    if (req.session.valid) {
        res.redirect("/private");
    }
    else{
        res.redirect("/login");
    }
});

router.get("/private",async (req,res) =>{
    loggingMiddleware(req);
    var message = "";
    var caV =false;
    
    if(req.session.valid){
        message = "Howdy Partner, Welcome to the world of Fantasy."
        caV = true; 
        const getData = await users.getTheUser(req.session.username);
    
        return res.render("./static/private", {message:message, caV: caV, getData:getData})
    }
    else {
        message = "HTTP Status 403 Error. Incorrect username or password."
        return res.render("./static/index", {message: message, caV: caV})
        
    }
    

});

router.post("/login", async (req, res) =>{

    loggingMiddleware(req);
    const user_Name = req.body.username;
    const password = req.body.password;
    
    try{
        var check = await cheeckAuth(user_Name,password);
    }catch(e){
        res.status(401);
        return res.render("./static/index", {error: e});
    }
    if(check){
        req.session.valid = true;
        res.cookie("AuthCookie", user_Name);
        req.session.username = user_Name;
        res.redirect("/private");
    }
    else {
        message = "HTTP Status 401 Error. Incorrect username or password."
        return res.render("./static/index", {message: message, caV: caV})
        
        
    }
});


router.get("/login", (req,res)=>{
    loggingMiddleware(req);
    return res.render("./static/index")
});

router.get("/logout", (req,res)=>{
    loggingMiddleware(req);
    //res.clearCookie('AuthCookie');
    req.session.destroy(function(err){
    
    });
    res.render('static/logout');
});

module.exports = router;