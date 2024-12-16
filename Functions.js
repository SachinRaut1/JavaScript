//addition
function add(a,b)
{
    console.log(a+b)
}//Function declaration 

add(2,3)//calling function with parameter


//Subtraction using function
function sub(a,b)
{
    console.log(a-b)
}

sub(10,5)

//multiplication using function

function multi(a,b)
{
    console.log(a*b)
}
multi(2,4)

//division using function

function div(a,b)
{
    console.log(a/b)
}

div(20,2)

//modulus 
function mod(a,b)
{
    console.log(a%b)
}
mod(100,2)





///Function as a Expression
var a=2+3
console.log(a)


var add=function(a,b)
{
   // console.log(a+b)
   return a+b
}
//add(77,25)
let result =add(89,21)
console.log(result)




/*Hoisting is JavaScript's default behavior of moving 
all declarations to the top of the current scope (script or function).
Be carefull that only declaration gets hoisted NOT the initialitations*/