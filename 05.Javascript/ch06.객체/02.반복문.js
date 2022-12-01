let personInfo = {
    'name':'제임스', 'age': 28, 'gender': '남자',
    'height': 175, 'job': '프로그래머', 'bmi':30.0
}

for (let attr in personInfo)
    console.log(attr, ':', personInfo[attr]);

    //array에서는 for..of 반복문을 써야 하지만,
    // for..in 을 사용할 수도 있음
let fruits = ['감', '귤', '배'];
for (let index in fruits)
    console.log(index, fruits[index]);

for (let fruit of fruits)
    console.log(fruit);

/*
* JSON(JavaScript Object Notation)
*      외부와 데이터를 주고받을때 사용됨
*/
const externalForm = JSON.stringify(personInfo);
console.log(externalForm);

const internalForm = JSON.parse(externalForm);
console.log(internalForm);

const exFruits = JSON.stringify(fruits);
console.log(exFruits);
const inFruits = JSON.parse(exFruits);
console.log(inFruits);