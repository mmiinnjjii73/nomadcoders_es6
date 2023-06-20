// #1.2 Block Scope

if(true) {
    const hello = 'hi'; // or let
}

console.log(hello);
// Console error
// const와 let 은 block({}를 뜻함) 안에서만 존재함 => block scope

if(true) {
    var hello = 'hi';
}

console.log(hello); // hi
// var는 function scope이다. (function scope: function 안에 접근할 수 있음)

let hello;
if(true) {
    hello = 'hi';
}
console.log(hello); // hi