//the for of  statement ceate a loop iterrating over iterable object
//including:=>built-in String ,array,array-like object like nodelist and also map and set

var Scores = [50, 60, 70, 80]

for (var score of Scores) {
    score = score + 5
    console.log(score)
}


//entries() method

let colors = ['red', 'green', 'black']

for (var [index, color] of colors.entries()) {
    console.log(index + '=>' + color)
}


//String
var str = 'sachin'

for (var i of str) {
    console.log(i)
}
