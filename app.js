const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

var app = express()
app.use(cors())
app.use(bodyParser.json())
var messages = []
var ChatRoom1 = []
var ChatRoom2 = []
var ChatRoom3 =[]
const ChatRooms = [{id:1,roomName:"Piton"},{id:2,roomName:"Anakonda"},{id:3,roomName:"Boa"}]

app.get('/message/:id', function (req, res) {
  switch(req.params.id){
    case "1" : messages=ChatRoom1 ;
    break
    case "2" : messages=ChatRoom2;
    break
    case"3" : messages=ChatRoom3;
    break
  }
  res.status(201).send(messages)
})
app.post('/message', function (req, res) {
  try {
    let timeStamp = new Date()
    req.body.time = timeStamp.getTime()
    switch(req.body.roomName){
      case "1" : ChatRoom1.push(req.body);
      break;
      case "2" : ChatRoom2.push(req.body);
      break;
      case "3" : ChatRoom3.push(req.body);
      break;
    } 
    res.status(201).send(req.body)
  } catch (err) {
    console.log("what&.")
  }
})

app.get('/Chatrooms', (req, res)=>{
  try{
    res.status(201).send(ChatRooms)
  }catch(err){
    console.log("Kakogo hrena?")
  }
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')

});
