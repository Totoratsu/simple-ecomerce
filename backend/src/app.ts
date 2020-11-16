import express from 'express';

const app = express();

// ...

app.listen(process.env.PORT || 65000, ()=>{
    console.log(`Server Running on port ${process.env.PORT || 65000}`)
});
