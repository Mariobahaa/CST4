
var str;
do{
str = window.prompt("Enter some text", "Hello World");
}while(str==null);
var letter = window.prompt("Enter a letter to count", "a");
var sensetive = window.confirm("Do you want to consider character casing?");

var count = 0;
var regex;

if (sensetive)
{
    regex = new RegExp(letter,"g");
}
else
{
     regex = new RegExp(letter,"ig");
}
count = (str.match(regex) || []).length;
document.write("Number of Occurrences: "+count);

//Question: how to add a variable in regex without using new