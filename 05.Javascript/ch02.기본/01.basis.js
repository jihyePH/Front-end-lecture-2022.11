// 출력 메소드
console.log("Hello", "world", "!!!");

// 상수, 변수
const hello = "안녕하세요?";    // 상수
var x = 3;                      // 변수, 2015년 이전
let y = 4;                      // 현시점에서는 var 대신에 let을 사용할 것

// 기본 자료형
// 1. 숫자(number)
console.log(typeof(1), typeof(3.14));
console.log(2**10);     // 2의 10제곱, 1024

// 2. 문자열(string)
console.log(typeof('hello'), typeof("world"));
console.log(hello[0], hello[5]);        // Java에서는 hello.charAt(0), hello.substring(0,1)
console.log(`${hello} 3 + 4 = ${x + y}`);       // template literal
console.log(`올해는 ${new Date().getFullYear()}년입니다.`);     // "올해는 " + new Date().getFullYear() + "년입니다."

// 3. 불(boolean)
console.log(typeof(true), typeof(false));
console.log(true < 10);             // true가 1로 변환이 되어 비교 연산을 수행

// 4. 함수(function)
console.log(typeof function() {});
console.log(typeof(() => {}));      // 람다 함수, () -> {}

// 5. 객체(object)
let obj = {x, y};           // {x: x, y: y}
console.log(typeof obj);
console.log(obj.x, obj.y);

// 6. undefined
let alpha;
console.log(typeof alpha);

// 증감 연산자
console.log(x++);       // 3이 출력되고, x의 값은 4가 됨
console.log(++x);       // 5가 출력되고, x의 값도 5가 됨

// 강제 자료형 변환
console.log(Number('101'), String(101), Number(true), Number(false));
console.log(Boolean(0), Boolean(undefined), Boolean(''), Boolean(0.0), Boolean(null), Boolean(NaN));
console.log(Boolean(0.1), Boolean(' '), Boolean(100));

console.log(Number('string'));      // NaN: Not a Number
console.log(Number('0o123'), Number('0x123'), Number('0b101'));     // 8진수, 16진수, 2진수

// 자동 자료형 변환
console.log(52 + '37', '37' + 21 + 31);         // string concatenation
console.log(1 + true, true + 'bool');

console.log(52 - "37", '37' - 21.5, '37' * 2);    // 문자열이 숫자로 바뀌어 계산됨

// 일치 연산자 - 자료형까지 계산
console.log(1 == 1.0, 1 === 1.0);       // 둘다 숫자형이라 일치함
console.log(1 == '1', 1 === '1', 1 == true, 1 === true);    // 값은 같으나, 자료형이 다름

// 상수
const today = new Date;
console.log(today);
today = " ";            // run-time error 발생