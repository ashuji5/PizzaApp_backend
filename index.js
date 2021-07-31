const express = require('express');
const Emiter = require('events');
require('./db/conn');
const menudata = require('./models/menuSchema');
const menuRoute = require('./routers/menuRouter');
const userRoute = require('./routers/userRouter');
const orderRoute = require('./routers/orderRouter');
const dashRouter = require('./routers/dashRouter');
const statusRouter = require('./routers/statusRouter');
const cors = require('cors');

const app = express();

const eventEmitter= new Emiter();
app.set('eventEmitter', eventEmitter);

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 5000;
app.use('/api', menuRoute);
app.use('/user', userRoute);
app.use('/orders', orderRoute);
app.use('/dashboard', dashRouter);
 app.use('/status/:id', statusRouter)


 const server =   app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})


const io = require('socket.io')(server , {
    cors: {
      origin: '*',
    }
  });




io.on('connection', (socket) =>{
    //join
    socket.on('join', (orderId) => {
        // console.log(orderId);
        socket.join(orderId)
    })
})

eventEmitter.on('orderUpdated', (data) =>{

  io.to(`order_${data.id}`).emit('orderUpdated', data);
  //console.log(`Data sent = ${data}`)

})

eventEmitter.on('orderPlaced', (data) =>{

  io.to('adminRoom').emit('orderPlaced', data);
  // console.log(`ordrPlaced ${data}`)

})
