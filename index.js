const express = require('express');
require('./db/conn');
const menudata = require('./models/menuSchema');
const menuRoute = require('./routers/menuRouter');
const userRoute = require('./routers/userRouter');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


const port = process.env.PORT || 5000;
app.use('/api', menuRoute);
app.use('/user', userRoute);


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})