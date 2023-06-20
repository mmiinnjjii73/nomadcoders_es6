// #1.1 Dead Zone

var myName = 'MING';
console.log(myName); // MING

//

console.log(myName);
var myName = 'MING'; // undefined
// 존재하지 않는걸 console 에 찍어내려고 해서 undefined 가 노출됨
// JavaScript는 위에서 아래로 읽어줌

//

console.log(myName);
// Console error

//

// hoisting: 자바스크립트가 프로그램을 실행하기 전에 이것들을 어딘가로 이동시킨다는것

//

console.log(myName);
let myName = 'MING';
// Console error (var 로 선언했을 때는 undefined 이지만 let 으로 선언할 경우 콘솔 에러가 남)