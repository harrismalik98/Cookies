// Cookies are small data that are stored on a client side and sent to the client along with server requests. 
// Cookies have various functionality, they can be used for maintaining sessions and adding user-specific features in your web app.

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();


app.use(cookieParser());
// This adds the cookieParser middleware to our app,
// which allows us to read and write cookies using the "req.cookies" and "res.cookie" objects, respectively.

app.get("/", (req,res)=>{
    res.send("Welcome to Page");
});



let user = {
    name: "Muhammad Harris",
    age: 24
};


app.get("/setuser", (req,res)=>{
    res.cookie("userData", user);
    // res.cookie("userData", user, {expire:400000 + Date.now()});

    // res.cookie("userData", user, {
    //     maxAge: 900000,   // 900000ms = 15mins
    //     httpOnly: true,  // The httpOnly option is a security feature that helps protect cookies from client-side JavaScript attacks by limiting their accessibility to HTTP requests only means cookie can only be accessible from server side not client side. If you goto web console and write "document.cookie" and get nothing.
    //     secure: true,    // Cookie will only set at "HTTPS" connection not "HTTP".
    //     domain: "www.example.com" // For which domain or its subdomain the cookie has been valid.
    // }); 
    

    // console.log(Date.now()); // Date.now() represents how many ms have been passed from jan 1,1970.
    
    res.send("User Data Added to Cookie");
});



app.get("/getuser", (req,res)=>{
    res.send(req.cookies);
});



app.get("/logout", (req,res)=>{
    res.clearCookie("userData");
    res.send("User Logout Successfully");
});




app.listen("3000",() =>{
    console.log("Server running at port 3000");
});


// Signed cookies provide an extra level of security by encrypting the cookie data and verifying its authenticity using a cryptographic signature and can only be decrypted by the server that created them.
// while cookies that are not signed are plain text and can be easily read and modified.