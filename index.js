const express = require('express');
const connectToDB = require('./src/config/db');
const appRouter = require('./src/app');
require('dotenv/config');

const PORT = process.env.PORT;

app = express();

connectToDB();

app.use(express.json());
app.use('/api/v1/blog', appRouter);

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
})