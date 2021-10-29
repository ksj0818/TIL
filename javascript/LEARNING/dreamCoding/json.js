/**
 * HTTP 
 * 브라우저 위에서 동작하고 있는 웹사이트나 웹어플리케이션 같은 클라이언트들이 
 * 어떻게 서버와 통신할 수 있는지 정의한 것이 HTTP
 * 
 * Hypertext 
 * 웹사이트에서 이용되어 지고 있는 하이퍼링크들만 말하는 것이 아니라 
 * 전반적으로 쓰여지고 있는 리소스들, 문서나 이미지 파일등을 모두 포함해서 말함.
 * 
 * JSON (Javascript Object Notation)
 * 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 파일 포맷.
 * 텍스트를 기반으로한 가볍고 가독성 좋고 키와 밸류로 이루어져 있는 파일 포맷.
 * 데이터를 서버와 주고받을 때 serialization(직렬화)을 위해서 사용
 * 프로그램 언어나 플랫폼에 상관없이 쓰일 수 있음.
 */

// 1. 오브젝트를 JSON으로 변환 하는 법
// stringity(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['🍏', '🍌']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // Symbol: Symbol("id"), // JS에만 있는 특별한 데이터도 JSON에 포함안되니 주의
  jump: () => {   // json에 포함되지 않음. 이 함수는 오브젝트에 있는 데이터가 아니기 때문에 제외됨
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);


json = JSON.stringify(rabbit, ['name', 'color']);  // 오브젝트에서 특정 프로퍼티만 JSON으로 하고싶다면 배열에 프로퍼티 이름만 전달하면됨 (이 방법도 되고 콜백함수 이용하는 법도 존재)
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { // 제일 처음으로 전달되는 것은 토끼 오브젝트를 싸고 있는 제일 최상위 것이 전달됨
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'goGilDong' : value;  
});  
console.log(json);


// 2. JSON을 Object로 변환 하는 법
// parse(json)
console.clear();
// json으로부터 오브젝트 만들기 매우 간단함, JSON에 있는 parse()를 이용해서 변환하고 싶은 JSON을 전달해주기만 하면됨
const obj = JSON.parse(json); 
console.log(obj);
rabbit.jump(); // 래빗이라는 오브젝트에는 jump라는 함수가 있었음. 이것을 출력하면 함수내에 콘솔로그가 찍힘
//obj.jump()     // 하지만 변환한 오브젝트는 스트링으로 만들어진 JSON으로 다시 오브젝트를 만들었기 때문에 함수는 serialize될때 포함되지 않아서 다시 json으로부터 오브젝트를 만든것에는 함수가 없음

