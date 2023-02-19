import mongoose from 'mongoose';

const uri= 'mongodb://127.0.0.1:27017/matadero';
 const conexion= mongoose.connect(uri,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(error=>console.log(error));

mongoose.connection.once('open',_=>{
    console.log('database is connected to',uri);
});


mongoose.connection.on('error', error=>{
    console.log(error);
});


modele.export= conexion;