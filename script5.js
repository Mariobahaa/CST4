var arr = [];
for (var i=0; i<5; i++)
{
    do{
        arr[i] = parseInt(prompt("Enter Number "+(i+1), i));
    } while(arr[i]==null || !isFinite(arr[i]));

}

document.write("Values you've entered ".fontcolor("red").bold() + arr.join(" 	&nbsp;,&nbsp; "));

document.write("<br>Values Sorted Ascendingly ".fontcolor("red").bold() + arr.sort(
function f(a,b) {return a-b;}
).join(" , "));

document.write("<br>Values Sorted Descendingly ".fontcolor("red").bold() + arr.sort(
function f(a,b) {return b-a;}
).join(" , "));


