const express=require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverconfig');

const TicketController=require('./controllers/ticket-controller');
const EmailService=require('./services/email-service')
const jobs=require('./utils/job');
const {subscribeMessage,createChannel}=require('./utils/messageQueue')
const {REMINDER_BINDING_KEY}=require('./config/serverconfig')

const setupAndStartServer=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

  const channel=await createChannel();
  subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY);

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT,()=>{
     console.log(`Server started at port ${PORT}`);
    //  jobs();
    });

}
setupAndStartServer();