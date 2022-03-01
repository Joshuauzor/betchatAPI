const express = require('express');
const res = require('express/lib/response');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT;
// 
app.use(express.json());
app.use(express.urlencoded());
// app.use(authRoute);

const customExpress = Object.create(express().response, {
    data: {
        value(data, status = true) {
            return this.type('json').json({
                status,
                data,
            })
        }
    },
    error: {
        value(error, message = 'An error occured', code) {
            return this.status(code || 500).json({
                message,
                statusCode: -3,
                status: false,
                error,
            })
        }
    },
    errorMessage: {
        value(message = 'API response message', code) {
            return this.status(code || 400).json({
                message,
                statusCode: 1,
                status: false,
            });
        },
    },
});

app.response = Object.create(customExpress);

app.get('/online', (req, res) => {
    res.data('app is online');
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})