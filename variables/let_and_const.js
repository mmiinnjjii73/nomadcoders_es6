// #1.0 Let and Const

var name = 'MING';
name = 'MINGG';
// 에러안남

const name = 'MING';
name = 'MINGG';
// const: variable의 내용이 변하는 것을 막아줌, 값을 다시 정의할 수 없음

const person = {
    name: 'MING'
}
person.name = 'MINGG';

// 에러안남

let name = 'MING';
name = 'MINGG';

// let 으로 값을 변경 할 수 있음