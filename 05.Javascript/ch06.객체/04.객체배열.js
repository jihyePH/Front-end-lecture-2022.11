let products = [
    {name: '사과', price: 1000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '감', price: 2000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '고구마', price: 3000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '밤', price: 5000, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }},
    {name: '배', price: 1400, print: function(){
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }}
];

for (let prod of products)
    prod.print();