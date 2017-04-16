let express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

let {AmbulanceRouter} = require('./api/ambulance/routes');

mongoose.connect('mongodb://localhost/medicalemergency');


let app = express();
const port = process.env.PORT || 3001;

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


let AmbulanceRoutes = new AmbulanceRouter(app);


const server = app.listen(port, () => console.log(`the server is running in the port ${port}`));
