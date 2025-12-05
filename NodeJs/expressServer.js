<------------------------- EXPRESS SERVER ---------------------->


const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello this is my express server');
})

app.listen(3000,()=>{
    console.log('server created successfully and on port 3000');
})

<------------------------- QUERY PARAMS ---------------------->

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    let a=req.query.num1;;
    let b=req.query.num2;
    res.send(a+b);
    req.end();
})

app.listen(3000,()=>{
    console.log('server running on port 3000');
})

<------------------------- PATH PARAMS ---------------------->

const express = require('express');
const app = express();

app.get('/api/:num1/:num2',(req,res)=>{
    let a=req.query.num1;;
    let b=req.query.num2;
    res.send(a+b);
    req.end();
})

app.listen(3000,()=>{
    console.log('server running on port 3000');
})


<-------------------------ROUTER LEVEL MIDDLEWARE---------------------->

const express = require('express');
const router = express.Router();
const app = express();

router.use((req,res,next)=>{
    console.log('router level middleware executed');
    next();
})

router.
    route('/')
    .get((req,res)=>{res.send('get request received')})
    .post((req,res)=>{res.send('post request received')});

app.use('/',router);

app.listen(3000,()=>{
    console.log('server running on port 3000');
})


<-------------------------ERROR HANDLING MIDDLEWARE---------------------->

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
     throw new Error('something went wrong')
})

app.use((req,res,next,err)=>{
    console.log(err.message)
})


app.listen(3000,()=>{
    console.log('server running on port 3000');
})

CUSTOM MODDLEWARE

<------------------------- CUSTOM MIDDLEWARE ---------------------->

const express = require('express');
const app = express();

function customMiddleware(req,res,next){
    console.log('custom middleware')
    next();
}

app.use(customMiddleware);

app.listen(3000 , ()=>{
    console.log('server running on port 3000');
})

 

<------------------------- RATE LIMITER ---------------------->

const express = require('express');
const {ratelimit} = require('express-rate-limiter');
const app = express();

const limiter = ratelimit({
    windowMs : 1 * 10 * 100 ,
    max : 3 ,
    message : 'too many requests please try again' 
})

app.use(limiter);

app.get('/',(req,res)=>{
    res.send('this is home page');
})

app.listen(3000 , ()=>{
    console.log('server running on port 3000');
})

<-------------------------VALIDATE SPECIFIC HEADER ---------------------->

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    if(req.header['x-api-key'] !== '1234'){
        return res.status(401).send('invalid API key')
    }
});

app.listen(3000 , ()=>{
    console.log('server running on port 3000');
})

