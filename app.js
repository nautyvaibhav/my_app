let express = require('express');

let route = require('./routes/route')

let app =express();

let PORT = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use('/',route)

app.listen(PORT,()=>{console.log(`running on ${PORT}`)})