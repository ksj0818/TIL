
// Function 
// - fundamental building block in the program, 프로그램을 구성하는 굉장히 기본적인 빌딩블럭
// - subprogram can be used multiple times      서브프로그램이라고도 불리며 여러 번 재사용 가능
// - performs a task or calculates a value      대체적으로 펑션은 한 가지의 태스크나 값을 계산하기 위해서 쓰여짐

// function declaration 
// function 키워드 이용하고, 함수의 이름을 지정한 다음에 파라미터들을 나열, 바디 함수안에 기본적인 비즈니스 로직을 작성한 다음 리턴
// function name(param1, param2) { body --- return; }
// 하나의 함수는 한 가지의 일만 하도록 만들어야 한다.
//  naming: doSomething, command, verb  
// 자바스크립트에서 function은 object 이다. 오브젝트로 간주 되어지기 때문에 이 펑션을 변수에다가 할당할 수도 있고 파라미터로 전달이 되고 함수를 리턴할 수도 있게됨

function printHello() {
  console.log('Hello!');
}
printHello();

// 자바스크립트에서는 String을 전달해야 하는지 number를 전달해야 하는지가 명확하지 않음, 숫자가 문자열로 변환되어 출력
function log(message) {
  console.log(message);
}
log(123213);

// Parameters
// premitive parameters: passed by value, 메모리에 value가 그대로 저장되어 있기 때문에 밸류가 전달이 되고
// object parameters: passed by reference, 메모리에 레퍼런스가 저장됨
function changeName(obj) {
  obj.name = 'coder';   // 전달된 오브젝트의 이름을 변경
}
const hong = { name: 'hong' };  // hong이라는 const를 정의한 다음에 hong이라는 오브젝트를 만들어서 할당해주면 메모리에는 오브젝트가 만들어진 레퍼런스가 들어가게됨
changeName(hong);               
console.log(hong);

// default Parameters (ES6에 추가됨)
function showMessage(message, from = 'hong') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// Rest Parameters (ES6 추가)
// ...을 작성하게 되면 Rest Parameters라고 불림, 이것은 배열 형태로 전달됨
function printAll (...args) {

  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // of를 이용해서 간단하게 출력할 수도 있음, args의 있는 모든 값들이 차례대로 arg에 지정되면서 출력
  for (const arg of args) {
    console.log(arg);
  }

  // 더 간단한 방법 forEach이용
  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'hong-gil-dong' );

// Return a value 
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// Early return, early exit (코드 지적을 받을 수 있음)
// bad 
function upgradeUser(user) { 
  if (user.point > 10) {  // 이렇게 뭐뭐 일때에 뭐뭐 한다라고 작성하게되면 블럭안에서 로직을 많이 작성하면 가독성이 떨어짐
    //  long upgrade logic
  }
}
// good
function upgradeUser(user) { 
  if (!user.point > 10) {   // 이런식으로 조건이 맞지 않을때는 빨리 리턴해서 함수를 종료하고 
    return;
  }
  // 조건이 맞을 때만 그 다음에 와서 필요한 로직을 작성하는것이 좋음
}

// function expression
// function declaration은 hoisted가 됨, 함수가 선언되기 이전에 호출해도 호출이 가능. 이것은 자바스크립트 엔진이 선언된 것을 제일 위로 올려주기 때문
// function expression은 할당된 다음부터 호출이 가능
const print = function () { // anonymous function 
  console.log('print');
};
print();  // 변수를 함수 호출하듯이 호출하면 바로 print가 출력됨
const printAgain = print; // 결국 printAgain은 함수를 가리키고 있기 때문에 다시 함수를 호출하는것 처럼 부르면 print가 출력됨
printAgain(); 
const sumAgain = sum;
console.log(sumAgain(1, 3));

// callback 
function randomQuiz(answer, printYes, printNo) {  // 함수를 전달해서 상황이 맞으면 전달된 함수를 부르는 것이 콜백 펑션
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function 
const printYes = function () {
  console.log('yes!');
};

// named function 디버깅할 때 스택에 함수의 이름이 나오게 하기 위해 쓰는것
const printNo = function print() {
  console.log('no');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function, 함수를  간결하게 만들어 주는 펑션 이 애로우 펑션은 항상 이름이 없음
// Always anonymous function 
const simplePrint = () => console.log('simplePrint! ');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  return a * b;
}
simplePrint();

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 바로 함수를 호출하려면 함수의 선언을 ()로 묶은 다음에 함수를 호출하듯이 (); 붙여주면 바로 함수가 호출됨
(function hello() {
  console.log('IIFE');
})();


// quiz 
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder 
function calculate(command, a, b) {
  if (command == '' || command === null) {
    console.log('공백 또는 null값은 입력할 수 없습니다.');
    return false;
  } else if (command === 'add') {
    printAdd(a, b);
  } else if (command === 'subtract') {
    printSubtract(a, b);
  } else if (command === 'divide') {
    printDivide(a, b);
  } else if (command === 'multiply') {
    printMultiply(a, b);
  } else if (command === 'remainder') {
    printRemainder(a, b);
  } else {
    console.log('add, subtract, divide, multiply, remainder 중에서 입력해 주세요.')
  }
    
}
const command = 'add';
const a = 2, b = 3;

function printAdd(a, b) {
  console.log(a + b);
}

function printSubtract(a, b) {
  console.log(a - b);
}

function printDivide(a, b) {
  console.log(a / b);
}

function printMultiply(a, b) {
  console.log(a * b);
}

function printRemainder(a, b) {
  console.log(a % b);
}

calculate(command, a, b);