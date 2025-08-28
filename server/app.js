const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const app = express();

// config - disabled for notes API
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config({ path: 'backend/config/config.env' });
// }

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// serve static test files
app.use('/public', express.static(path.join(__dirname, 'public')));

// const user = require('./routes/userRoute');
// const product = require('./routes/productRoute');
// const order = require('./routes/orderRoute');
// const payment = require('./routes/paymentRoute');
const notes = require('./routes/notesRoute');

// app.use('/api/v1', user);
// app.use('/api/v1', product);
// app.use('/api/v1', order);
// app.use('/api/v1', payment);
app.use('/api/v1', notes);

// deployment
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
    });
}

// error middleware
// app.use(errorMiddleware);

module.exports = app;



















































































































































































































const errorPayment = require('./controllers/paymentController');