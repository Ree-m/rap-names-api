const express =require('express')
const app =express()
const PORT =8000

const rappers={
    '21 savage':{
        'age': '29',
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    'chance the rapper':{
        'age': '29',
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
    },

    'dylan':{
        'age': 'dylan',
        'birthName': 'dyaln',
        'birthLocation':'dylan'
    }
}


app.get ('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')    //__dirname means wherever the server.js is located thats where we look for the file that we need to response with(ie, index.html)
} )

app.get('/api/:rapperName' , (request,respone)=>{  //:rapersName is the query paramater
    const rappersName=request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        respone.json(rappers[rappersName])
        
    }else{
        respone.json(rappers['dylan'])
    }
    
        
})

app.listen(PORT , ()=>{
    console.log(`The server is running in port ${PORT}`)
})