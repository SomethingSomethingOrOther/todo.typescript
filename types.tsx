
let age :number;
let isStudent: boolean;
let hobbies:string[];

let role:[number,string] //tuple

type Person = {
  name: string,
  age:number,
}
let person:Person={
  name:"tom",
  age:22,
}

let lotsofpeople:Person[]
//define a function
let printName: (name:string) => void

// use unknown instead of any if you dont know what the variable is going to be 
 let personName:unknown

 // for functions use NEVER instead of void because void returns undefined and never returns nothing
 let printotherName:(name:string)=>never

// alias TYPE and INTERFACE

interface Person1{
    name:string,
    age:number
}

interface Guy extends Person{
    profession:string,


}

