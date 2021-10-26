'use strict'

// Array✨

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍅', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);  // 배열은 인덱스로 데이터를 가져올 수 있음

// 3. Looping over an array
// 배열 출력 방법
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]+'for');
}
// b. for of 
for (let fruit of fruits) {
  console.log(fruit + 'of');
}

// c. for Each  포이치는 배열 안에 들어있는 밸류들 마다 내가 전달한 함수를 출력함 
fruits.forEach((fruit, index) => console.log(fruit, index)) 

// 4. Addtion, deletion, copy
// push: add 배열의 마지막에 데이터 추가
fruits.push('🍓', '🍒');
console.log(fruits);

// pop: 배열의 마지막 데이터 삭제
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: 앞에서 데이터 추가 
fruits.unshift('🍋', '🥝');
console.log(fruits);

// shift: 앞에서 데이터 삭제
fruits.shift()
console.log(fruits);
// 쉬프트와 언쉬프트는 매우 느림 pop, push 사용하기

// splice: 아이템을 지정된 포지션에서 삭제 
fruits.push('🍈', '🍍');
console.log(fruits);
fruits.splice(0, 1) // 0번째 인덱스에서 부터 1만큼 삭제하겠다
console.log(fruits);
fruits.splice(0, 1, '🥭', '🍏') // 0번째 부터 1만큼 지우고 그 자리부터 데이터 넣기
console.log(fruits);

// combine two arrays 두 가지 배열을 묶어서 만들기
const fruits2 = ['🍇', '🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍍'));  // 인덱스 구하는 법 (제일 첫 번째로 해당하는 값을 출력)

// 6. Includes
console.log(fruits.includes('🍌'));   // 배열에 데이터가 포함되어 있는지 없는지 확인

// lastIndexOf: 마지막에 해당하는 인덱스 출력
console.clear();
fruits.push('🍌');
console.log(fruits);
console.log(fruits.indexOf('🍌'));
console.log(fruits.lastIndexOf('🍌'));

// 배열 선언, 인덱스 접근, 순환하면서 값들 출력, 데이터 앞뒤로 추가,삭제, 해당하는 인덱스부터 원하는 데이터를 삭제하는 splice

// array가 선언된 곳으로 가서 처음부터 읽어보기


const poped = fruits.pop(); // pop()은 배열에서 마지막 요소를 제거하고 반환함.
console.log(poped);

