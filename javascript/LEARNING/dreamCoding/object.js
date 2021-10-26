'use strict'

// 오브젝트는 키와 밸류의 집합체이다. object = {key : value}
// 1. Literals and properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

const goGilDong = {
  name: 'gogildong',
  age: 48
};

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

print(goGilDong);

// JS는 dynamic type language, Runtime(프로그램이 동작하고 있을 때) 동적으로 타입이 런타임때 결정됨
goGilDong.hasJob = true;  // 가능하면 이렇게 하지말기 나중에 유지보수 하기 힘들어짐. 이런게 있구나 정도로만 알기
console.log(goGilDong.hasJob);

// 삭제도 가능함.
delete goGilDong.hasJob;
console.log(goGilDong.hasJob);

// 2. Computed properties (계산된 프로퍼티즈)
console.log(goGilDong.name);  // 오브젝트 안에 있는 데이터에 접근할 때 .을 이용해서 데이터에 접근. (코딩하는 순간 그 키에 해당하는 값을 받아오고 싶을 때 사용)
console.log(goGilDong['name']); // 오브젝트 안에 있는 변수의 이름을 string 형태로 접근가능 (* 주의점 string 타입으로 접근해야함), 정확하게 어떤 키가 필요할지 모를때 즉, 런타임에서 결정될 때 사용 (실시간으로 원하는 키의 값을 받아오고싶을때)
goGilDong['hasJob'] = true;
console.log(goGilDong['hasJob']);

function printValue(obj, key) {
  // console.log(obj.key); 오브젝트에는 key라는 프로퍼티가 들어있지 않기 때문에 undefined 
  console.log(obj[key]);  // 다양한 키들을 변경해서 출력할 수 있음. 동적으로 키에 관련된 밸류를 받아올 때 유용하게 사용
}

printValue(goGilDong, 'name')
printValue(goGilDong, 'age')

// 3. Property value shorthand : 키와 밸류의 이름이 동일하다면 생략가능
const person1 = {name: 'bob', age: 22};
const person2 = {name: 'steve', age: 42};   
const person3 = {name: 'dave', age: 12};
const person4 = makePerson('gogildong', 44);
const person5 = new Person('gogilman',222);

console.log(person4);
console.log(person5);

function makePerson(name, age) {  // class가 없을 때 JS에서 사용한 방법
  return {
    // name: name,  
    // age: age   키와 밸류의 이름이 동일하면 생략가능
    name,  
    age
  }
}

// 4. Constructor Function
function Person (name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator : 해당 하는 오브젝트 안에 키가 있는지 없는지 확인하는것
console.log('name' in goGilDong);
console.log('ggg' in goGilDong);

// 6. for..in vs for..of 
// for (key in obj) 
console.clear();
for (let key in goGilDong) {   // 고길동이 가지고 있는 키들이 블럭을 돌 때 마다 key라는 지역 변수에 할당됨, 
  console.log(key);            // 모든 키들을 받아와서 일을 처리하고 싶을 때 사용
}

// for (value of iterable) 
const array = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) { xxxxxxxxxxxxxxxx이렇게 쓰지말기
//   console.log(array[i]);
// }

for (let value of array) {  // array에 있는 모든 값들이 value에 할당
  console.log(value);
}

// 7. Cloning 
const user = {name: 'gildong', age: 88};
const user2 = user;

user2.name = 'gogildong'; // user와 같은 레퍼런스를 보고 있기 때문에 user2의 이름을 바꾸면 user도 같이 바뀜
console.log(user);

// 오브젝트만 복사하는 방법
const user3 = {}; 
for (let key in user) {
  user3[key] = user[key]; // user에 있는 프로퍼티들을 넣어줌
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
