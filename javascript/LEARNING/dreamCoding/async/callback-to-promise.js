"use strict";

// JS는 synchronous. 동기적임
// 호이스팅된 이후부터 코드가 순서대로 동기적으로 실행
// hoisting: var, function declaration 선언들이 자동적으로 최상위로 올라가는 것
console.log("1");
setTimeout(function () {
  // 브라우저 API라서 브라우저에게 요청함
  console.log("2");
}, 2000);
console.log("3");

// 콜백도 2가지로 나뉨
// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello print"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  console.log(print + timeout);
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// js는 함수를 콜백형태로 인자로 다른 함수에 전달할 수도 있고 또는 변수에 할당할 수도 있는 그런 언어

console.clear();
//callback hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "goGilDong" && password === "1234") ||
          (id === "hong" && password === "5678")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "goGilDong") {
          resolve({ name: "goGilDong", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log());

/**
 * 여기까지 프로미스는 무엇인지,
 * 콜백으로 작성된 코드를 프로미스로 변환하는 방법,
 * 콜백 지옥 코드를 이쁘게 만들 수 있는 방법에 대해서 알아봄
 * 여기서 더 깔끔하게 작성할 수 있는 방법이 존재함.
 */
