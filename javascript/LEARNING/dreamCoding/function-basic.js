// 함수는 어떤 프로그래밍 언어를 배우든 딱 2가지만 이해하기
// 이 2가지를 이해한 다음에 줄기를 뻗어 나아가면됨
// 1. 함수 선언
// 2. 함수 호출

function doSomething(add) {
  const result = add(2, 3);
  console.log(result);
}

// 값을 리턴하는 함수
function add(a, b) {
  const sum = a + b;
  return sum;
}

// 3. 함수를 인자로 전달
doSomething(add);

const addFun = add;
console.log(addFun);
addFun(1, 2);

// 함수의 이름은 함수 자체를 가르키고 있다.
// 함수를 호출하기 위해서는 괄호()를 이용해서 필요한 데이터를 전달하면 된다
function divide(num1, num2) {
  return num1 / num2;
}
function surprise(operator) {
  // operator라는 인자의 이름은 surprise라는 함수를 호출하는 사람이 전달하는 데이터를 담고 있는데 여기에서는 add라는 함수의 레퍼런스가 전달됨
  const result = operator(2, 3); // add(2, 3)을 호출한거나 똑같음
  console.log(result);
}

surprise(add);
