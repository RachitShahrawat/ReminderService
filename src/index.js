const express=require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverconfig');
const {sendBasicEmail}=require('./services/email-service');

const setupAndStartServer=()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT,()=>{
     console.log(`Server started at port ${PORT}`);

     sendBasicEmail(
        'support@admin.com',
        'bl2026.a@gmail.com',
        'This is a testing email',
        'Hey,How are you'
     )
    });

}
setupAndStartServer();