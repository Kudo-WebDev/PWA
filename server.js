var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var port = 9091;
var DIST_DIR      = path.join(__dirname, "dist");
var HTML_FILE     = path.join(DIST_DIR, "index.html");
app.use(express.static(DIST_DIR));
app.use(cookieParser());
app.get("*", (req, res) => {
  res.cookie('sessionCookieNode',req.cookies.shop_kudo_session, { maxAge: 900000});
  res.sendFile(HTML_FILE);
});
app.get("/auth", (req, res) => res.json({auth: req.cookies.shop_kudo_session}));
app.listen(port, function(error){
    if(error){
      console.error(error)
    }else{
      console.info("client is running in port "+port)
    }
});