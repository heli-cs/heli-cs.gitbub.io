var day="";
var month="";
var ampm="";
var ampmhour="";
var myweekday="";
var year="";
var time= "";
mydate=new Date();
myweekday=mydate.getDay();
mymonth=mydate.getMonth()+1;
myday= mydate.getDate();
myyear= mydate.getYear();
year=(myyear > 200) ? myyear : 1900 + myyear;


var hours = mydate.getHours()
var minutes = mydate.getMinutes()
var seconds = mydate.getSeconds()
var timeValue = "" +  (hours)
    timeValue  += ((minutes < 10) ? ":0" : ":") + minutes
    timeValue  += ((seconds < 10) ? ":0" : ":") + seconds
time = timeValue;



if(mymonth == 1)
month=" Jan. ";
else if(mymonth == 2)
month=" Feb. ";
else if(mymonth == 3)
month=" Mar. ";
else if(mymonth == 4)
month=" Apr. ";
else if(mymonth == 5)
month=" May ";
else if(mymonth == 6)
month=" June ";
else if(mymonth == 7)
month=" July ";
else if(mymonth == 8)
month=" Aug. ";
else if(mymonth == 9)
month=" Sept. ";
else if(mymonth == 10)
month=" Oct. ";
else if(mymonth == 11)
month=" Nov. ";
else if(mymonth == 12)
month=" Dec. ";

if(myweekday == 0)
weekday=" Sun. ";
else if(myweekday == 1)
weekday=" Mon. ";
else if(myweekday == 2)
weekday=" Tue. ";
else if(myweekday == 3)
weekday=" Wed. ";
else if(myweekday == 4)
weekday=" Thu. ";
else if(myweekday == 5)
weekday=" Fri. ";
else if(myweekday == 6)
weekday=" Sat. ";
document.write(weekday + " " + month + " " + myday + " " + time + " " + year);
