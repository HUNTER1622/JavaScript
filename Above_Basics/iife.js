// iife immediate execution of a function
// syntax ()()
//kyu use krte hn : isiliye use krtey hn kyukee kabhi kabhi global scope se apne function me pollution hota hn use bachane ke liye

//() iske andr function likho () ye function call krane ke lliye

(() => console.log("abcd"))();

//is function ke niche agr ek of iife likh doge to error dega kyukee isko rokna bhi padta hn using ;

((name) => console.log(name))("Shivam"); // parameter passing in IIFE 
