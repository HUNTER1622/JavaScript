const myarr = [1,2,4,5,6,76,75,53,567,54,77,46]

let forEachvalue =  myarr.forEach((item) => (
  item + 1
))

// for each return nai krta kuch return krane ke liye manually return likhna padega 
console.log(forEachvalue);


let filterValue  = myarr.filter((item) => item+1 )

console.log(filterValue);