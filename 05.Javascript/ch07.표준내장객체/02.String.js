let hello = '안녕하세요?';

// STring 속성
console.log(hello.length);         //6글자

// Method
console.log(hello.charAt(0), hello[0]);
console.log(hello.concat(' 여러분~~~!!!'));     //hello + ' 여러분~~~!!!'

console.log(hello.indexOf('하'));               //하 : 몇번째?

// 디지털 시계 : 00:00~23:59 -> 하루동안 3이 표시되는 시간은 몇초인가?
let totalSeconds = 0;
for (let hour = 0; hour <24; hour++){
    for (let minute =0; minute <60; minute++){
        const display = hour + ':' + minute;
        if (display.indexOf('3') >=0)          //디지털 시계에 3이라는 숫자가 표시되면
            totalSeconds += 60;
    }
}
console.log(totalSeconds);

// 정규 표현식
//const sample = 'A quick brown fox 갈색의 재빠른 여우가 jumps over 게으른 개를 the lazy dog';

// let hour = 24;
// let min = 60;
// let result = 0;

// for(let i=0; i<hour; i++){
//     for(let j=0; j<min; j++){
//         if(i %10==3 || parseInt(j/10) ==3 || j%10 ==3){
//             result+= 60;
//         }
//     }
// }
// console.log(result);
// console.log(33/10);             //3.3
const sample = 'A quick brown fox 갈색의 재빠른 여우가 Jumps over 게으른 개를 the lazy dog';

let newStr = sample.replace(/[A-Z]/, '대');     //'[A-z]' 안됨
console.log(newStr);
newStr = sample.replace(/o/, 'O');              // 한개만 바꿈
console.log(newStr);
newStr = sample.replace(/o/g,'O');          // 모든 o를 O로 바꿈
console.log(newStr);
console.log(sample.replace(/[A-Z]w+/g,'XXX'));
        
// 한글 제거 
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);
//한글과 공백만 남기고 나머지 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');
console.log(newStr);

// split
let fruits = '사과,배,감,포도';
let fruitArray = fruits.split(',');
console.log(fruitArray);

const products = '망치,나사,못,톱,도끼'.split(',');
console.log(products);

fruits = '사과, 배, 감, 포도';
fruitArray = fruits.split(', ');
console.log(fruitArray);
fruitArray = fruits.split(',').map(s => s.trim());    //array element 각각 callback함수 적용
console.log(fruitArray);

// 문자열의 일부분 추출
const today = new Date().toISOString();
console.log(today);
// 2022-12-01T06:29:42.928Z
console.log(today.substring(0,10));             //2022-12-01 :날짜만 추출
console.log(today.substring(11,19));

//현재 날짜,시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num){
    return (num<10) ? '0'+num : String(num);        //'' + num
}
function datetime(){
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}-${twoDigit(now.getDate())}`+
    `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds)}`
}

const now = datetime();
console.log(now);
console.log(now.substring(2,16));


//1에서부터 1000까지 숫자가 있다.
//0은 몇번, 1은 몇번, ...9는 몇번 사용되는가?
let numbers = '';
for (let i =1; i <= 1000; i++)
    numbers += i;

    //방법1 : split 사용
let obj = {};
for (let i = 0; i<= 9; i++){
    obj[String(i)] = numbers.split(String(i)).length -1;
}
console.log(obj);

    //방법2 : 정규표현식 사용
let reArray = [];
for (let i = 0; i<=9; i++){
    const re = new RegExp('[^' + i + ']', 'g');
    reArray.push(numbers.replace(re, '').length);
}
console.log(reArray);
