var deg; 
do{
        deg = parseFloat(prompt("Enter Degree","Enter value here"));
} while(deg==null || !isFinite(deg));

alert("Cos "+deg+"\u00B0 is "+ (Math.cos(Math.PI * (deg/180))).toFixed(5));