'use strict'


let data = $.get('data/content.json');

console.log(data);

let newData = {
    "name": "john",
    "pets": ["Rosie", "Rocky", "Luna"],
    "children": {
        "zach": { "age": 21 },
        "alie": { "age": 14 }
    },
    "job": "instructor"
}

console.log(newData);


function log(newData){
let n =newData.map((value)=>{
    return value;
})
console.log(value)
}



function log(newData){
    let n = newData.filter((value)=>{
        return value.charAt(0)=='R'
    })
    console.log(n)
    }
    

log(newData.pets);



function Person(name,age){
    this.name=name,
    this.age=age
}
var newP=new Person('zach',21);
var newP2=new Person('allie',14);


