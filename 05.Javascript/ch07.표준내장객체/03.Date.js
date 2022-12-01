// Date 객체 생성 방법
// 1. 현재 날짜/시간

let today = new Date();
//console.log(today.toDateString());          //2022-12-01T07:40:26.102Z
//console.log(today.toLocalString());          // Timezone 반영됨

// 2. Unix Time 기준(1970.1.1 00:00 이후 ms단위로 정수형태)
let someDay = new Date(1.67e12);         //2022-12-02T16:53:20.000Z
console.log(someDay);

// 3. 문자열 기반
let strDate = new Date("December 1, 2022 17:05:00");
console.log(strDate);

// 4. 시간 요소 (연, 월-1, 일, 시 , 분, 초)
let timeDate = new Date(2022, 11, 1, 17, 6,0);      //2022-12-01T08:06:00.000Z
console.log(timeDate.toLocaleString());             //2022. 12. 1. 오후 5:06:00

//매개변수로 받은 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num){
    return (num<10) ? '0'+num : String(num);        //'' + num
}
function myDatetime(date){
    return `${date.getFullYear()}-${date.getMonth()+1}-${twoDigit(date.getDate())}`+
    `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds)}`
}
console.log(myDatetime(strDate));

// 시간 더하고 빼기
today.setDate(today.getDate()+100);
console.log(myDatetime(today));

// 오늘 : 1년 11개월 3일 후의 날짜 구하기
let date = new Date();
date.setFullYear(date.getFullYear()+1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate()+3);
console.log(date);              //2024-11-04T08:20:16.468Z

// 시간 간격
let now = new Date();
console.log(now.getTime());

const christmasDate = new Date(2022, 11, 25);
console.log(myDatetime(christmasDate));

const diffMs = christmasDate.getTime() - now.getTime();       //크리스마스와 오늘 사이 ms(밀리초)
const diffDay = Math.ceil(diffMs / (24*60*60*1000));          //24일(Math.ceil: 실제 23일 몇시간..)
console.log(diffDay);