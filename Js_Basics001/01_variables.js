const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope

agr var use krenege to agr kisi scope ke andr same name se variable bna hoga to vo change krne pr upr ke bhi variables change ho jaaynge.

*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])