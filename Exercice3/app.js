let x = "1";
let y = "2";

let z = x + y;

console.log(typeof x + ':' + ' ' + x);
console.log(typeof y + ":" + " " + y);
console.log(typeof z + ":" + " " + z);

console.log("------------------------2eme partie----------------------------");

let a = +x;  //Unary operator
let b = parseInt(y); 
z = a + b;
let c = Math.floor(z);

console.log(typeof a + ":" + " " + a);
console.log(typeof b + ":" + " " + b);
console.log(typeof c + ":" + " " + c);
