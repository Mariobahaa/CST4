var name;
do{
name = prompt( "Enter your name", "your name");
} while(name==null || isFinite(name));


var phone;
var reg1 = /^[0-9]{8}$/;
do{
phone = prompt("Enter your phone", "22223344");
} while(phone==null || !isFinite(phone) || !(reg1).test(phone));


var mobile;
var reg2 = new RegExp(/^012|011|010|015[0-9]{8}$/);
do{
mobile = prompt("Enter your mobile", "01288233002");
} while(mobile==null || !(reg2).test(mobile));




var mail;
var reg3 = new RegExp(/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.com$/);
do{
mail = prompt("Enter your mail", "hello@mail.com");
} while(mail==null || !(reg3).test(mail));


var date = new Date();

var color = "red";
color = prompt("choose color, enter red or green or blue", "red");
if(color==null) color = "red";
document.write("Name ".fontcolor(color)); 
document.write(name);
document.write("<br>Phone ".fontcolor(color)); 
document.write(phone);
document.write("<br>Mobile ".fontcolor(color)); 
document.write(mobile);
document.write("<br>Mail ".fontcolor(color)); 
document.write(mail);
document.write("<br>Today is ".fontcolor(color)); 
document.write(date);





