const express = require('express')
const app = new express()
const mongoose = require('mongoose');
const Message = require('./MessageSchema');
const ejs = require('ejs');
const moment = require('moment');
const path = require('path')


const { json } = require('express')
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'ejs');

//-------------------------Data base connection------------------------------//

const mongoDB = 'mongodb+srv://mrunal:mrunal@cluster0.a81kv.mongodb.net/mini-message-board?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true}).then(console.log("Successful"))
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname,'public')))

app.get('/', async(req, res)=>{
   const messages = await Message.find({})
     res.render('index',{
        messages, 
        moment
     })
})

app.get('/new', (req, res, next) => {
// var textField = document.getElementById('input-message');
next();
})

 app.get('/form', (req,res)=>{
     res.render('form')
 })
app.post('/data', (req,res) => {
   Message.create(req.body, (err,message)=>{
      console.log(req.body);
      res.redirect('/')
   })
})
app.listen(4000, ()=>{
console.log('App listening on port 4000')
})

 const id = '6132e734e387c1264214afa0';
  
//  Message.findByIdAndDelete(id, (err,message)=>{
//     console.log(err,message);
//  })




// mongodb+srv://mrunal:<password>@cluster0.q9h4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority