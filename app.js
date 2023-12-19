const express=require('express');
const bodyParser=require('body-parser');
const app=express();


app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.listen(8000,()=>{
    console.log("port is running at server 8000");
})


let tasks=[];
app.get('/',(req,res)=>{
    let option={weekday:'long', year:'numeric', month:'long',day:'numeric'};

    let today= new Date();
    let date=today.toLocaleDateString("en-US",option);
    res.render('list',{date,tasks});
})

app.post('/',(req,res)=>{
    let newTask=req.body.task;
    tasks.push(newTask)
    res.redirect('/');
})

