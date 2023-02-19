
import express from 'express'; 
import body_parser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'

//import routeEntidad from './routes/route.entidad.js'


const app= express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
app.use(cors());

//app.use('/entidad', routeEntidad);

dotenv.config({path:'./src/.env'});

//app.use(routeEntidad);

export default app;
