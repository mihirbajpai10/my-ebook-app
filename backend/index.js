// import express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const NovelRouter = require('./routers/novelRouter');
const UtileRouter = require('./routers/util');

const cors = require('cors');

// initialize express
const app = express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());

app.use('/user', UserRouter);
app.use('/novel', NovelRouter);
app.use('/util', UtileRouter);

app.use(express.static('./uploads'));

// creating a route (routing)
app.get('/', (req, res) => {
    res.send('response from express server');
});

// starting express server
app.listen(port, () => { console.log('server started'); });