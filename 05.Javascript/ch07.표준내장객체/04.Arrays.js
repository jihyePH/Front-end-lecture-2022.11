let cars = ['Audi','Benz', 'BMW','Volvo'];
console.log(cars);

let car = cars.pop();       //pop : 배열의 마지막 요소를 꺼내고,배열에서 꺼낸요소 제거
console.log(car, cars);

cars.push("Hyndai");        //push : 배열에 객체 추가
console.log(cars);

// Array를 생성
let persons = new Array('James','Maria');   // 배열도 객체 : 생성자를  통해 생성가능
console.log(persons);

// Array 속성
console.log(cars.length, persons.length);

// Array 정렬
console.log('정렬전', cars);
cars.sort();                         // sort : 배열 정렬
console.log('정렬후', cars);
// 내림차순 정렬
cars.reverse();
console.log(cars);

// Array join
console.log(cars.join(', '));

// 문자열을 거꾸로 만들기
let sample = '기러기 토마토 우영우';
let arr = sample.split('');        //split : 글자 단위로 array 쪼개기
console.log(arr);
arr.reverse();
console.log(arr);
console.log(arr.join(''));

const reverseStr = sample.split('').reverse.join('');
console.log(reverseStr);
const rs = str => str.split('').reverse.join('');       // 글자를 뒤집어주는 함수
console.log(rs('안녕하세요?'));

// 배열의 일부분을 반환
let fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.slice(1,3));
console.log(fruits.slice(2));

// 배열의 일부분 삭제해서 리턴
const res = fruits.slice(0,2);
console.log(res);
console.log(fruits);