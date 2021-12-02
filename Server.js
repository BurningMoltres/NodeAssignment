const http=require("http");
const url=require("url");

http.createServer(function(req,res){
    console.log("server started on port 5000")
   
   

let mydata=url.parse(req.url,true).query;
var year=mydata.year;
var month=mydata.month;
var day=mydata.date;
var name=mydata.name;



var presentDate=new Date();
let todaysday=presentDate.getDay();
let todaysmonth=presentDate.getMonth();
let todaysYear=presentDate.getFullYear();

let age=0;
//getting the last day of a particular month
let maxmonth=new Date(year,month,0).getDate();


if(year>todaysYear || month>12)
{
    res.write("Sorry invalid input");
}
else
{


if(todaysmonth>month)
{
    age=todaysYear-year;
}
else if(todaysmonth===month)
{
    if(todaysday>=day)
    {
        age=todaysYear-year;
    }
    else
    {
        age=(todaysYear-year)-1;
    }
}
else
{
    age=(todaysYear-year)-1;
}



res.write("Hello "+name);
res.write("Your are currently"+" "+age +""+"old");
}

res.end();
}).listen(5000);