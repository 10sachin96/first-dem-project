var express= require("express");
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors');
const PORT=1234;
var fs= require('fs');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.get("/showall",(req,res)=>{
    fs.readFile("./books.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();

        }
        else
        {
            console.log("client request")
            res.send(data);
            res.end();
        }
    });
});
app.get("/search/:bcode",(req,res)=>{
    fs.readFile("./books.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();

        }
        else
        {
            var blist= JSON.parse(data);
            var found=false;
            for(i=0;i<blist.length;i++)
            {
                if(blist[i].bcode==req.params.bcode)
                {
                    found= true;
                    var obj={
                        bcode:blist[i].bcode,
                        bname:blist[i].bname,
                        bprice:blist[i].bprice
                    }
                    res.send(JSON.stringify(obj));
                    res.end();

                }
            }
            if(found==false)
            {
                res.send("data not found");
                res.end();
            }
        }
    });
});  
app.post("/save",(req,res)=>{
    fs.readFile("./books.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();
        }
        else
        {
            var blist=JSON.parse(data);
            var obj={
                bcode:req.body.bcode,
                bname:req.body.bname,
                bprice:req.body.bprice
        };
        blist.push(obj);
        var ulist=JSON.stringify(blist);
        fs.writeFile("./books.json",ulist,()=>{
            res.send("Data Saved");
            res.end();
        })
    }
});
}); 
app.put("/update/:bcode/:bname/:bprice",(req,res)=>{
    fs.readFile("./books.json","utf-8",(err,data)=>{
        if(err)
        {
            res.send(err);
            res.end();
        }
        else
        {
            var blist = JSON.parse(data);
            var found =false;
            for(i=0;i<blist.length;i++)
            {
                if(blist[i].bcode == req.params.bcode)
                {
                    found= true;
                    blist[i].bcode=req.params.bcode,
                    blist[i].bname=req.params.bname,
                    blist[i].bprice=req.params.bprice
                }

                }
                var ulist=JSON.stringify(blist);
                fs.writeFile("./books.json",ulist,()=>{
                    res.send("Data Updated");
                    res.end();
                })
            }
        })
    });
    
        app.delete("/delete/:bcode",(req,res)=>{
            fs.readFile("./books.json","utf-8",(err,data)=>{
                if(err)
                {
                    res.send(err);
                    res.end();
                }
                else{
                    var blist= JSON.parse(data);
                    var found=false;
                    for(i=0;i<blist.length;i++)
                    {
                        if(blist[i].bcode==req.params.bcode)
                        {
                            found=true;
                            blist.splice(i,1);
                            var ulist=JSON.stringify(blist);
                            fs.writeFile("./books.json",ulist,()=>{
                                res.send("data deleted");
                                res.end();
                            })
                        }
                    }}
                })
            });
            app.listen(PORT,()=>{
                console.log("Server is running at port" +PORT);
            })

