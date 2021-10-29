'use strict'

// JS는 synchronous. 동기적임
// 호이스팅된 이후부터 코드가 순서대로 동기적으로 실행
// hoisting: var, function declaration 선언들이 자동적으로 최상위로 올라가는 것
console.log('1');
setTimeout(function() { // 브라우저 API라서 브라우저에게 요청함 
  console.log('2');
}, 2000);
console.log('3');

// 콜백도 2가지로 나뉨
// Synchronous callback 
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello print'));

// Asynchronous callback 
function printWithDelay(print, timeout) {
  console.log(print + timeout);
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000)

// js는 함수를 콜백형태로 인자로 다른 함수에 전달할 수도 있고 또는 변수에 할당할 수도 있는 그런 언어


//callback hell example 
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        id === 'goGilDong' && password === '1234' ||
        id === 'hong' && password === '5678'
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000)
  };

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'goGilDong') {
        onSuccess({name: 'goGilDong', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    })
  };
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// 콜백지옥!
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      error => {
      console.log(error);
    })
  },
  error => {
    console.log(error);
  }
);