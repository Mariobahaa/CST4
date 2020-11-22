var str;
do{
str = window.prompt("Enter some text", "radar");
}while(str==null);
var sensetive = window.confirm("Do you want to consider character casing?");

if (!sensetive)
{
   str = str.toLowerCase();
}

var flag = true;
for(var i=0;i<str.length/2;i++)
{
    if(str[i]!=str[str.length-1-i]) 
        {
            flag = false;
            break; // Sorry 
        }
}

if(flag) {document.write("Yes! it's a palindrome.");}
else {
    document.write("No! it's not a palindrome.");
}