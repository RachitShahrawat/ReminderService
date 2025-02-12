const express=require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverconfig');
// const {sendBasicEmail}=require('./services/email-service');
const TicketController=require('./controllers/ticket-controller');
const jobs=require('./utils/job');
const {createChannel}=require('./utils/messageQueue')

const setupAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

  // const channel=await createChannel();

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=>{
     console.log(`Server started at port ${PORT}`);
    //  jobs();

    //  sendBasicEmail(
    //     'support@admin.com',
    //     'bl2026.a@gmail.com',
    //     'This is a testing email',
    //     'Hey,how are you'
    //  )
    });

}
setupAndStartServer();