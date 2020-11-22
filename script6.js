var radius; 
do{
        radius = parseFloat(prompt("Enter Circle's Radius "), "1");
} while(radius==null || !isFinite(radius));

alert("The area of the circle = "+ (Math.PI * radius * radius).toFixed(16) );