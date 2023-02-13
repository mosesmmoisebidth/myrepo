const express = require('express');
const fs = require('fs');
const port = 8900;
const app = express();

const buy = fs.readFileSync('./multiply.html', 'utf-8');
app.get('/multi', (request, response) => {
    response.end(buy);
})

app.listen(port, () => {
    console.log('server started!!');
})