const express = require('express')
const path = require('path')
const app = express()
const Tasks = require('./tasks')
const db = require('./moongose');
const port = 3000

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname + '/views'));
app.use(express.urlencoded());



app.get('/', function(req, res){

    Tasks.find({}, function(err, Tasks){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('index.ejs',{
            page: "ToDo List",
            t: Tasks
        });

    })
  
})

app.post('/create-tasks', function(req,res){
    Tasks.create({
        do: req.body.do,
        desc: req.body.desc
    },function(err , newTasks){
        if(err){
            console.log("error in creating a task");
            return;
        }

        console.log('New Task',newTasks);
        return res.redirect('/');   // or return res.redirect('back');
    })
})

app.get('/delete',(req,res)=>{
     
    let id = req.query.id;
    Tasks.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log('error deleting from the database');
        }

        return res.redirect('back');
 })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})