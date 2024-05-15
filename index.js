const express=require("express");
const app =express();
const path=require("path");
const {connectMongoDB} =require("./connection");
const methodOverride=require("method-override");
const userRouter=require("./routes/user");
const port=8080;
// Middleware and configuration
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

// connection
connectMongoDB("mongodb://127.0.0.1:27017/user");

// Routes
app.use("/users",userRouter)

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})