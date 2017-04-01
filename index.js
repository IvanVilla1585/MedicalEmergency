const express = require('express')
const bodyparser = require('body-parser')


const app = express()
const port = process.env.PORT || 3001

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


app.listen(port, () => console.log(`server runing in the port ${port}`));
