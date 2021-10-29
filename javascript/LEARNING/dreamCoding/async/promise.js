/**
 * promise
 * js에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 오브젝트,
 * 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행되어졌다면
 * 성공의 메시지와 함께 처리된 결과값을 전달해주고, 만약 기능을 수행하다가 예상치 못한 문제가 발생했다면 에러를
 * 비동기적인 것을 수행할 때 콜백함수 대신에 쓸 수 있는 유용한 함수
 * 딱 2가지만 포인트를 잡고 공부하기
 * 1. state (상태)
 * 프로세스가 무거운 오퍼레이션을 수행하고 있는지 아니면 기능수행이 다 완료되어서 성공했는지 실패했는지 이런 상태에 대해서 이해하는 것이 중요.
 * 프로미스의 상태는 프로미스가 만들어져서 우리가 지정한 오퍼레이션이 수행 중일때는 - pending 상태가 되고,
 * 이 오퍼레이션을 성공적으로 다 마치게 되면 - fulfilled 상태가 됨,
 * 파일을 찾을 수 없다거나 네트워크에 문제가 생길 시 rejected 상태가 됨
 * 2. producer와 consumer 차이점을 알기.
 * 우리가 원하는 데이터를 제공하는 사람과 이 제공된 데이터를 쓰는 사람 이 두 가지의 차이점을 잘 이해하기
 * 콜백을 쓰지않고 promise 오브젝트를 통해서 비동기 코드를 깔끔하게 처리할 수 있는지에 대해서 알아보기
 */

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // 프로미스의 생성자를 보면 executor라는 콜백함수를 전달해 줘야하는데 이 콜백함수에는 또 다른 2가지의 콜백함수를 받음(resolve, reject)
  // 네트워크 통신, 파일을 읽어오기 등 이런것들은 비동기적으로 처리하는 것이 좋음
  // 새로운 프로미스가 만들어질 때는 우리가 전달한 executor라는 콜백함수가 바로 자동적으로 실행됨
  console.log("doing something...");
  // 프로미스 안에서 네트워크 통신을 하는 것처럼 setTimeout을 이용해서 시간을 딜레이 하기
  setTimeout(() => {
    // resolve('gogildong')  // 성공적으로 가공한 데이터를 전달
    reject(new Error("no network")); // reject는 보통 에러라는 오브젝트를 통해서 값을 전달
  }, 2000);
});

// 2. Consumers: then, catch, finally를 이용해서 값을 받아올 수 있음.
promise
  .then((value) => {
    // then()의 파라미터(value)는 resolve 콜백함수에서 전달된 값이 들어옴
    console.log(value);
  })
  .catch((error) => {
    // catch()를 이용해서 에러가 발생했을때 어떻게 처리할건지 콜백함수를 등록해주기
    console.log(error);
  })
  .finally(() => {
    // finally()는 성공하던 실패하던 무조건 마지막에 호출함
    console.log("finally 마지막에 무조건 호출함");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
// 여러가지를 동시에 묶어서 다른 비동기적인 것들을 처리할 수 있음
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling 프로미스를 체이닝 했을 때 어떻게 에러를 핸들링 할 수 있는지 알아보기
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${hen} => 🥚`);
      reject(`${hen} => 🍗`);
    }, 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => "🍗") // 중간에 에러가 생겨도 전체적인 프로미스 체인에 문제가 발생하지 않도록 예외처리 해주기
  .then(cook) // egg => cook(egg)를 생략하고 cook만 호출, (콜백함수를 전달할 때 받아오는 밸류를 다음함수로 바로 하나를 호출하는 경우에는 생략가능) *인자가 똑같으면 생략가능
  .then((meal) => console.log(meal))
  .catch(console.log);
