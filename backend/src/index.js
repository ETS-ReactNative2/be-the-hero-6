const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    const data = request.body;
    console.log(data);

    return response.send('teste');

});

app.listen(3333);