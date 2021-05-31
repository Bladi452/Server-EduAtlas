    //Require
const express = require ('express');


    //Initialization
const app = express()

app.use(express.json());

    //Settings

app.set('port', process.env.PORT || 4000);

    //Middlewares



    //Global Variables



    //Routes



    //Public


    //Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port')
})

