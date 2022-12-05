function answer1() {
    let num1 = parseInt($('#num1').val());
    let num2 = parseInt($('#num2').val());
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || (num2-num1) < 4) {
        alert("입력 값의 범위를 확인하세요.");
        return;
    }

    let powerArray = [];
    for (let i = num1; i <= num2; i++) {
        powerArray.push(Math.pow(2, i));
    }
    $('#result1').text('결과: ' + powerArray)
                 .css('color', 'blue');
        
  /*   let resNode = document.getElementById('result1');
    resNode.innerHTML = '결과: ' + powerArray;
    resNode.style.color = 'blue'; */
}

function answer2() {
    // let textNode = document.getElementById('text2');
    let text = $('#text').val();
    const noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ');
    $('#noPunct').text(noPunct)
    // document.getElementById('noPunct').innerHTML = noPunct;

    const words = noPunct.split(' ');
    let count = 0;
    for (let word of words)
        if (word == 'the')
            count++;
    
        $('#result2').text(`'the'의 개수는 ${count}개 입니다.`)
                     .css('color', 'blue');
  /*   const resNode = document.getElementById('result2');
    resNode.innerHTML = `'the'의 개수는 ${count}개 입니다.`;
    resNode.style.color = 'blue'; */
}

function answer3() {
    const priceStr = $('#price').val().split(';').map(x => parseInt(x));
    priceStr.sort

    let prices = priceStr.split(';').map(x => parseInt(x));

    prices.sort((a, b) => b - a);       // prices가 내림차순으로 정렬됨
    $('#result3').text(prices)
                 .css('color', 'blue');
  /*   const resNode = document.getElementById('result3');
    resNode.innerHTML = prices;
    resNode.style.color = 'blue'; */
}

var cars = [];
function answer4_add() {
    const carNode = document.getElementById('car');
    cars.push($('#car').val());
}
function answer4() {
    /* const manu = cars.map(x => {
        let y = x.split(' ');
        return y[0];
    }); */
    const manu = cars.map(x => x.split(' ')[0]);
    /* const model = cars.map(x => {
        let y = x.split(' ');
        let m = y.slice(1);
        return m.join(' ');
    }); */
    const model = cars.map(x => x.split(' ').slice(1).join(' '));

    document.getElementById('input').innerHTML = cars;
    document.getElementById('manufacturer').innerHTML = manu;
    document.getElementById('model').innerHTML = model;
}

$(document).ready(function(){
    setInterval(() => {
        const now = new Date();
        const currDay = myDatetime(now).substring(0,10);
        const weekday = '일월화수목금토'.split('')[now.getDay()];
        const currentDay = `${currDay}(${weekday})`;
        
        const currentTime = myDatetime(now).substring(11);

        $('#date').text(currentDay);
        $('#time').text(currentTime);
       /*  document.getElementById('date').innerHTML = currentDay;
        document.getElementById('time').innerHTML = currentTime;  */   // 16:24:14

        const mapping = [0, 1, 3, 4, 6, 7]
        $('.number').each(function(index, element) {
            $(this).attr('src', `../../img/digits/${currentTime[mapping[index]]}.svg`);
        });
        /* $('#t1').attr('src' , `../../img/digits/${currentTime[0]}.svg`);
        $('#t2').attr('src' , `../../img/digits/${currentTime[1]}.svg`);
        $('#t3').attr('src' , `../../img/digits/${currentTime[3]}.svg`);
        $('#t4').attr('src' , `../../img/digits/${currentTime[4]}.svg`);
        $('#t5').attr('src' , `../../img/digits/${currentTime[6]}.svg`);
        $('#t6').attr('src' , `../../img/digits/${currentTime[7]}.svg`); */
        
    }, 1000);
});