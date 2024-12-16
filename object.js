// in java object are kay value pair 
var person={
    name :'sachin' ,
    secondname : 'raut',
    age : 25 ,
    ownscar : false
}



//console.log(person)

//dot notation for access a value
console.log(person.age)

//bracet annotation
console.log(person['ownscar'])




var car={
    brand : 'maruti suzuki',
    price : 900000 ,
    color : 'white',
    engine : '1200cc',
    maruticars : ['swift', 'dezire', 'baleno' ,'grandvitara'],

    othercarsbrands : {
        car1: 'kia' ,
        car2: 'mahindra',
        kia : {
            carname: 'sonet',
            suv : 'karens'
        }
    }
}

console.log(car.maruticars[3])
console.log(car.othercarsbrands.kia.carname)