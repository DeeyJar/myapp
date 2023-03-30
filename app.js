const express=require('express');
const app = express();
const cors = require('cors')

//settings
app.set('port', 8000);
app.use(cors());

//middlewares
app.use(express.json())

//routes
app.use('/api',require('./src/auth/authApi'));
app.use('/api/cities',require('./src/routers/cities.js'));

app.use('/api/Itinerary',require('./src/routers/itinerary.js'));

app.use('/api/activity',require('./src/routers/Activities-router.js'));
app.listen(8080,() => console.log('Conectado en puerto 8080'));

//Routes para el login
app.use('/api/CreateAccount',require('./src/routers/CreateAccount-router.js'));

module.exports=app;


