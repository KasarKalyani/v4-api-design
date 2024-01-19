import express from 'express';
import router from './router';
import morgan from 'morgan';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

 
// app.get('/test',(req,res)=>{
//     console.log("express server up");
//     res.status(200);
//     res.json ({message: 'json hello'});
//     res.send("hello to this verse");
// });
app.get('/',(req,res,next)=>{
    res.json({message: 'hello me'})
})

app.use('/api',protect, router);

app.post('/user',createNewUser);
app.post('/signin',signin);

app.use((err,req,res,next)=>{
    if(err.type === 'auth')
    {
        res.status(400).json({message: 'auth error'})
    }
    if(err.type === 'input')
    {
        res.status(401).json({message: 'input error'})
    }
    else{
        res.json({message: `error thrown ${err.message}`})
    }
    
})
export default app;