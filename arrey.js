//Arrays provides you an orderd cillection of data
var arr=[1, 2 ,'sachin' , true, 12.4]
//console.log(arr)

//accessing the element

var a=arr[2]
console.log(a)

//replaccing elements of an array by using index
arr[2]='Rohit'
console.log(arr)
//length of an array
console.log(arr.length)


//inbuilt java Script array
var arr2=[12,14,15,16]

//pop method
//The pop() method removes the last element from an array
//and returns that element. 
//This method changes the length of the array.
arr2.pop()

console.log('poped array =' ,arr2)

//push method
//push() is used to add an element to the end of an array, 

arr2.push(100)

console.log('pushed array =' ,arr2)

//shift method
//The shift() method removes the first element from an array 
//and returns that removed element. 
//This method changes the length of the array.
const arr3=[1,2,3,4,5,6,7]
const firstelement=arr3.shift()
//arr2.shift()

// expected output: Array [2, 3,4,5,6,7]
console.log(arr3)

// expected output: 1
console.log('shiftedArray =', firstelement)

//unshifted array

const addfirstElement=arr3.unshift()
console.log('unshiftedArray =' ,addfirstElement)
