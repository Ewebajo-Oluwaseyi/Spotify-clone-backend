const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path');
const logger = require('morgan')

const app = express();

app.use(logger("dev"))
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/api/login', require('./routes/login'));
app.use('/api/refresh', require('./routes/refresh'));


  //set static folder
app.use(express.static(path.join(__dirname, "client/build")));

app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));