import app from './app.js';
import mongoose from 'mongoose';
const port= process.env.PORT || 4000;
async function main (){      
    try {
        const uri= 'mongodb://127.0.0.1:27017/matadero';
        await  mongoose.connect(uri,{
           useNewUrlParser:true,
           useUnifiedTopology:true
        }).catch(error=>console.log(error));
        console.log('database is connected to',uri);
        app.listen(port);
        console.log(`Server on port ${port}`);
        } catch (error) {
            console.error('No se ejecuto el servidor', error);
        }
    }
main();