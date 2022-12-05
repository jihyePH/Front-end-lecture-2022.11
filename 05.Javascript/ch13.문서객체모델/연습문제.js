function answer1(){
    let num1Node = document.getElementById('num1');
    let num2Node = document.getElementById('num2');  
    let num1 = parseInt(num1Node.value); 
    let num2 = parseInt(num2Node.value); 
    if (num1<1 || num1 > 20 || num2 <10 || num2 >30 || (num2-num1) < 4){
        alert("입력 값의 범위를 확인하세요.");
        return;
}
    let powerArray = [];
    for (let i = num1; i<=num2; i++){
        powerArray.push(Math.pow(2,i));
    }
    let resNode = document.getElementById('result1');
    resNode.innerHTML = '결과: ' + powerArray;
    resNode.style.color = 'blue';
}

function answer2(){
    let textNode = document.getElementById('text1')
    let text1  = textNode.value;
    const noP
}

function answer3(){
    const priceStr = document.getElementById('price').value;
    let pricesArr = priceStr.split(';');
    let prices = pricesStrArr.map(x => parseInt(x));
    /* let prices= [];
    for (let str of priceStrArr)
        prices.push(parseInt(str)); 
}