// In JavaScript, the for-in loop allows you to loop through the properties of an object.
// The statements of code found within the loop body will be executed once for each property of the object

var colors={
    first:'red',
    second:'orange',
    third:'black',
    fourth:'yellow'
}

for(var color in colors)
{
    console.log(color +'=>'+ colors[color])
}


//for in loop with an array

var colorsarr=['red','orange','black','yellow']

for(var color1 in colorsarr)
{
    console.log(color1 +'=>'+ colorsarr[color1])
}