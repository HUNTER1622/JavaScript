const user = {
  username: "Shivam",
  price: 999,
  welcomeUser: function () {
    console.log(`${this.username}, Welcome to my website`);
  },
};

// user.welcomeUser();
// user.username = "Hitesh";
// user.welcomeUser();

// function abc () {
//     let username = "bhfd";
//     console.log(this.username);
// }
// abc();

let arrow = () => {
  //arrow function ke andr to this ka object bilkul hi blank hn {}
  let username = "bhfd";
  console.log(this);
};

arrow();

// Three syntaxs for arrow function

let fun1 = (num1, num2) => {
  return num1 + num2;
};

console.log(fun1(2,3));

let fun2 = (num1,num2) => num1+num2 // isme na hi curly braces lgaane hn na hi return keyword likhna hn (curly me wrap kra to return krna hi padega ) but yeah confusing hota hn thora isiliye niche wala method use kro () wala

console.log(fun2(3,6)); 

let fun3 = (num1,num2) => (num1+num2) // agr () wrap kra to  

console.log(fun3(5,6));

//Arrow function

// () => {} // return likhna padega 
// () => () // return nai likhna padega 