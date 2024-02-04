// primitive or non-primitive datypes me unhe kaise store kra jaa rha hn kaise call kiya ja rha hn ye.

//  Primitive  (Call by value "mtlb isme proper original value nai jaati isme uski copy jaati hn")

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //always give unique number
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) (inhe jb call kiya jata hn to inme proper value pass hotii hn )

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof(myObj));

console.log(typeof anotherId);
console.log(typeof myFunction);

// (every non-primitive ka datatype object hi hoga except function uska datatype function-object hota hn )
// or (null) ka bhi datatype object hi aata hn 

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory Allocation

// Stack(primitive) and Heap(Non-primitive) 

// Primitive datatypes me humesha ek copy milti hn 
// Non-Primitve me humesha original value ka reference  milta hn (mtlb jo bhi change karenge original value me change hoga )


// Example Stack

let firstName  = "Shivam";
let secondName  = firstName;
secondName = "Jha";
console.log(firstName);
console.log(secondName);
// Note : firstname change nai hua kyukee uski copy secondName ke pass thiii 


// Example Heap

let initialObj =  {
    name:"Shivam Jha",
    religion:"Hindu",
    age:26
}

let finalObj = initialObj;

finalObj.age = 25;

console.log(initialObj);
console.log(finalObj);

// NOTE: isme finalObj me change krne prr initialobj bhi value change ho gai kyukee isme original value ka reference pass hota hn.


