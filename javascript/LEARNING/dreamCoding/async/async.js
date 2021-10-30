// async & await : 깔끔하게 Promise를 사용할 수 있는 방법임
// 그렇다고 무조건 promise가 나쁘고 async와 await 대체해서 사용해야하는 것은 절대 아님

// 1. async
// async라는 키워드를 함수 앞에 붙여주면 코드블럭이 자동으로 Promise로 바뀜
async function fetchUser() {
  // do network reqeust in 10 secs....
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
// 2. await : async가 붙은 함수 안에서만 쓸 수 있음
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
