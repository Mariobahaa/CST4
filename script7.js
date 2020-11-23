var numb; 
do{
        numb = parseInt(prompt("Enter any number","1"));
} while(numb==null || !isFinite(numb));

alert("The Square Root of "+numb+" = " + Math.sqrt(numb));