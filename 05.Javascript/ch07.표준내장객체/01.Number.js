//기본 자료형 - primitive type
let number = 273.1;
let number2 = Number('273.1');

console.log(number === number2);         //위 두가지 방법 동일함

// 객체 자료형 - Wrapper class
let numObj = new Number(273.1);
console.log(number == numObj);          //값은 같음
console.log(number === numObj);         //값은 같지만 타입은 달라서 false. Number, Object

let str = '과자|1500';
console.log(str.split('|'));

let strObj = new String('과자|1500');
console.log(strObj.split('|'));

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());        //지수형태 표현
console.log(pi.toFixed(5));             //소수점이하 자리수 설정
console.log(pi.toPrecision(3));         //유효숫자 설정

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53)-1);         //9007199254740991 = Number.MAX_SAFE_INTEGER

