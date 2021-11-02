// 네트워크 통신을 할 때 자신감있게 비동기 처리를 이용하기

// 자바스크립트는 동기적 (JS synchronous)

console.log("1");
// 브라우저 API
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

function printImmediately(print) {
  print(); // 인자값에 담긴 함수 호출
}
printImmediately(() => console.log("hello"));

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => console.log("async callback"), 2000);

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "j" && password === "1234") ||
        (id === "c" && password === "5678")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "j") {
        onSuccess({ name: "j", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
// 콜백지옥
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `hello ${userWithRole.role}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
