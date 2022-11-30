function sum(a,b){
    return a+b;
}

const anonySum = function(a,b){            //익명 함수
    return a+b;
}

console.log(sum(3,4));
console.log(anonySUm(3,4));

const arrowSum = (a,b) => a + b;    //화살표 함수
console.log(arrowSum(3,4));