// 매개변수의 값이 지정되지 않은경우의 대처 방법
function print (name, count){
    // if (!count)             //false -0, 0.0, '', Nan, undefined
    //     count = 0;
    count = count ? count : 0;
    console.log(`${name} (이/가) ${count}개 있습니다.`);
}

print('사과', 10);
print('감');             //감 (이/가) undefined개 있습니다.

function print2(name, count=0){
    console.log(`${name} (이/가) ${count}개 있습니다.`);
}
print('사과', 10);
print('감'); 