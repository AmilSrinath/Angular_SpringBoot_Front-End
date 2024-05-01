const express = require ("express");
const app = express();
const cors = require ("cors")
const {createProxyMiddleware} = require ("http-proxy-middleware")

app.get("/", createProxyMiddleware({target:'http://localhost:4200',chageOrigin:true}))
app. listen(3000, ()=>{
    console.log("Proxy stared");
})