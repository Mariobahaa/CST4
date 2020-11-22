var str = window.prompt("Enter some text", "Hello World");
var letter = window.prompt("Enter a letter to count", "a");
var sensetive = window.confirm("Do you want to consider character casing?");

var count = 0;

if (sensetive)
{
    count = str.match(/letter/);
}
else
{
    count = str.match(/letter/i);
}
