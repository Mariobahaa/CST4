var arr = [];
//var str = "";
//Intentionally not entered by a loop for presentation 
do{
arr[0] = parseFloat(prompt("Enter first Number", "1"));
//str+=arr[0];
} while(arr[0]==null || !isFinite(arr[0]));

do{
arr[1] = parseFloat(prompt("Enter Second Number","2"));
//str+=arr[1];
} while(arr[1]==null || !isFinite(arr[1]));

do{
arr[2] = parseFloat(prompt("Enter Third Number","3"));
//str+=arr[2];
} while(arr[2]==null || !isFinite(arr[2]));

document.write("Sum of 3 Values ".fontcolor("red"));
var temp = 0.0;
for(var i=0;i<3;i++)
{
    /*if(i!=0){document.write("+"+arr[i]);}else {document.write(arr[i]);}  */
    temp+= arr[i];
}
document.write(arr.join("+"));
document.write(" = "+ temp);

document.write("<br>Mulltiplication of 3 Values ".fontcolor("red"));
temp = 1;
for(var i=0;i<3;i++)
{
    temp*= arr[i];
}
document.write(arr.join("*"));
document.write(" = "+ temp);

document.write("<br>Division of 3 Values ".fontcolor("red"));
temp = 1;
for(var i=0;i<3;i++)
{
    temp/= arr[i];
}
document.write(arr.join("/"));
document.write(" = "+ temp);

