/**
@credits This code was contribuded by Ticker.
*/



for (var i = 1; i <= 10; i++) {
  console.log(i);
  i + 1
}




function createLoop(i) {
  for (var _i = 0; _i < i; _i++) {

    console.log(`Ticker tutorials number #${_i + 1}`)
    i + 1
  }
}

createLoop(10)

function x(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];
    for (let j = 0; j < subArray.length; j++) {
      product *= subArray[j];
    }
  }
  return console.log(product);
}

x([[1, 2], [3, 4], [5, 6, 7]]);

const arr = [0,1,2,3,4,5,6];
for(const value of arr) {
    console.log(value)
}

const _arr = [0,1,2,3,4,5,6];
for (const value in arr) {
    console.log(value)
}


function encrypt(password) {
    let encryptedPassword = '';
    for (let c of password) {
        let crypted_c = String.fromCharCode(c.charCodeAt(0) + 3);
        encryptedPassword += crypted_c;

    }
    return encryptedPassword;
}
 function decrypt(encryptedPassword) {
    let decrypted_password="";
    for (let c of encryptedPassword) {
        let crypted_c = String.fromCharCode(c.charCodeAt(0) - 3);
        decrypted_password += crypted_c;
    }
    return decrypted_password;
}
let encrypted = encrypt("ticker123")
let decrypted = decrypt(encrypted);

var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

const __arr = [0,1,2,3,4,5,6,7,8,9];
var i = 0;
while (i < arr.length) {
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        const subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
            product *= subArray[j]
        }
    }
}


/** 
@credits This code was contribuded by Ticker.
*/