const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const port = process.env.PORT;
const authRoute = require('./routes/auth.routes');
const postRoute = require('./routes/posts.routes');
const interestRoute = require('./routes/interest.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRoute);
app.use(postRoute);
app.use(interestRoute);

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

app.use((err, req, res, next) => {
    console.error(err);

    if (err.type && err.type === 'entity.parse.failed') {
        res.status(400).errorMessage('Invalid JSON payload passed.');
    } else if (err.toString() === '[object Object]') {
        try {
            res.status(400).error(err);
        } catch {
            res.status(500).error('Server error');
        }
    } else {
        res.status(400).error(err.toString());
    }
});

app.get('/online', (req, res) => {
    res.data('app is online');
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})

module.exports = app;