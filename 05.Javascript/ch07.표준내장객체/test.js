let s ='121456131';
// let sArray = s.split('1');
// console.log(sArray);
// console.log(sArray.length -1);

console.log(s.replace(/[^1]/g, ''));
console.log(s.replace(/[^1]/g, '').length);

let one = '1';
console.log(s.replace('/[^'+one+']/g', ''));

let re = new RegExp('[^' + i + ']', 'g');
console.log(s.replace(re, ''));
console.log(re);