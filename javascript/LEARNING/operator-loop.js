// 1. String concatenation
console.log('my' + ' cat'); // 문자열과 문자열을 합해서 새로운 문자열을 만듬
console.log('1, ' + 3);       // 문자열에 숫자를 더하게 되면 숫자가 문자열로 변환 되어서 합쳐짐
console.log(`string literals:
''''그대로 출력됨
1 + 2 = ${1 + 2}`); // 줄바꿈을 하거나 특수기호를 사용해도 그대로 출력


// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 * 1); // multiply
console.log(1 / 1); // divide
console.log(5 % 2); // remainder
console.log(2 ** 3);  // exponentiation 

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // 3
// counter = counter + 1; 
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1; 
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators 
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);  // false
console.log(10 <= 6); // false
console.log(10 > 6);  // true
console.log(10 >= 6); // true

// 6. Logical operators: || (or), && (and), ! (not) 
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`) // 3가지 중 하나라도 참이면 참이됨
function check() { 
  for (let i = 0; i < 10; i ++) {
    //wasting time
    console.log('NOOOO!')
  }
  return true;
}
