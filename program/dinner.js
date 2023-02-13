const express = require('express');
const port = 8900;
const app = express();
app.use(express());
const dater = fs.readFileSync('./deer.html', 'utf-8');

app.get('/calc', (request, response) => {
    response.end(dater);
})


app.listen(port, () => {
    console.log("the server has started by now!!");
});