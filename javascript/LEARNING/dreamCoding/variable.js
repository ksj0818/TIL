'use strict';

// Variable(변수) : 변경될 수 있는 값을 말함. , rw (read/write) variable은 메모리에 읽고 쓰기가 가능함
// let (added in ES6)
// 값이 계속 변경 될 수 있는 것을 Mutable 데이터 타입이라고 함
let globalName = 'global name'; 
// Block scope
{
  let name = 'joon';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);  // 안에서도 이용 가능
}
console.log(name);  // block 밖에서는 블럭 안에 있는 내용들을 볼 수 없음.
console.log(globalName);

// var (이제 사용 안 함. let쓸 것!)
// var hoisting(끌어올려주다) : (간혹 면접에서 물어볼 수도 있음) 변수를 어디에 선언 했는지에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것을 말함.
// var는 Block scope이 없음. (블럭 안에 선언해도 블럭 밖에서 출력 가능)

console.log(age); //값을 할당 하기도 전에 출력도 할 수 있음..
age = 4; // 변수 선언도 하기 전에 사용가능...
var age;  

/**
 * constant(상수) , Immutable 데이터 타입, const는 r (read only) 메모리 읽기만 가능
 * 한 번 할당하면 값이 절대 바뀌지 않음
 * 값을 가리키고 있는 포인터가 잠겨 있음. (값 수정 불가)
 * favor immutable data type always for a few  reasons:  (값을 할당한 다음에 다시는 값이 변경 되지 않는 데이터 타입을 사용해라)
 * - security (해킹 방지)
 * - thread safety : 어플리케이션이 실행되면 한 가지의 프로세스가 할당이 되고
 * 프로세스 안에서는 다양한 thread가 동시에 돌아가면서 어플리케이션을 효율적으로 빠르게 동작할 수 있도록 도와줌
 * 이 thread들이 변수에 동시에 접근하여 값을 변경할 수가 있는데 이게 위험함. 그렇기 때문에 
 * 가능하면 값이 변하지 않는 것을 사용하는게 좋다
 * - reduce human mistakes : 나중에 코드를 변경하거나 다른 개발자가 코드를 수정할 때도 실수를 방자할 수 있음.
 * 
 * Immutable data types: primitive types, frozon objects (i.e. object.freeze())
 *  통째로 메모리에 올렸다가 다른 스트링으로 변경이 가능하지, 데이터 자체를 변경하는건 불가능
 * Mutable data types: all object by default are mutable in JS 
 *  오브젝트는 계속 스스로 변경이 가능함, 
 *  자바스크립트에서는 기본적으로 모든 오브젝트는 변경이 가능
 */

const daysInWeek = 7;
const maxNumber = 5;
console.log('daysInWeek = ', daysInWeek + ', maxNumber =', maxNumber);

/**
 * variable types (primitive, object 두 가지 타입으로 나뉘어져 있음)
 * primivtive, single item : number, string, boolean, null, undefiend, symbol
 * 더 이상 작은 단위로 나뉘어질 수 없는 한 가지의 아이템을 말함, 
 * value(값) 자체가 메모리에 저장됨
 * object, box container
 * 싱글 아이템들을 여러 개 묶어서 한 단위로, 한 박스로 관리 할 수 있게 해주는 것, 
 * 너무 커서 메모리에 한 번에 다 올라갈 수가 없음, const 상수를 할당하게 되면 
 * 상수가 가리키는 곳에 reference가 존재 이 레퍼런스가 실제로 오브젝트를 가르키고 있는 곳임,
 * 이 레퍼런스를 통해서 실제로 오브젝트가 담겨 있는 메모리를 가르키게 됨
 * function도 자바스크립트에서 데이터 타입중 하나임
 * first-class function : 이 프로그래밍 언어에서는 펑션도 다른 데이터 타입처럼 변수에 할당이 가능하고
 * 또 그렇기 때문에 함수의 파라미터 (인자)로도 전달이 되고 함수에서 리턴 타입으로도 펑션을 리턴 할 수 있는 것이 가능
 * 자바스크립트에서는 타입이 다이나믹하게 결정됨
 */

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, negativeInfinity, NaN
const infinity = 1 / 0; // 숫자를 0으로 나누게 되면 무한대 숫자 값이 생김 
const negativeInfinity = -1 / 0;  // 음수 값을 0으로 나누게 되면 -Infinity 값이 출력
const nAn = 'not a number' / 2;   // 숫자가 아닌 스트링을 숫자로 나누게 되면 NaN 값이 출력

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53 , 숫자 마지막에 n를 추가하면 빅인트로 간주됨
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string 
const char = 'c';   // 다른 프로그래밍 언어에서는 한 가지 캐릭터가 담겨져 있는 데이터 타입이 있음, 자바스크립트에서는 한 글자던 여러 글자던 다 스트링 타입으로 할당
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`;  //temlate literals (string) `(백틱) 기호를 이용해서 원하는 스트링을 적고 ${}를 이용하면 변수의 값이 자동적으로 붙여져서 나옴
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

/**
 * boolean
 * false: 0, null, NaN, undefined, ''
 * true: any other value
 */
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null; // null이라고 할당하는 경우에는 텅텅 빈 값임 empty값이라고 지정해주는 것
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 
let x;  // 선언은 되었지만 아무것도 값이 지정되어 있지 않음. 텅텅 비었는지 안에 값이 들어가 있는지 아직 안 정해짐
console.log(`value: ${x}, type: ${typeof x}`);

/**
 * symbol은 맵이나 다른 자료구조에서 고유한 식별자가 필요하거나 아니면
 * 동시에 다발적으로 concurrent하게 일어날 수 있는 코드에서 우선순위를 주고 싶을때 정말 고유한 식별자가 필요할 때 쓰여짐
 * 식별자를 스트링을 이용해서 쓰는 경우도 있는데 이 스트링은 다른 모듈이나 다른 파일에서 동일한 스트링을 썼을때 동일한 식별자로 간주함.
 * 반대로 심볼의 경우는 동일한 데이터를 이용해서 만들었지만 이 두가지의 심볼은 다른 경우임.
 *   */ 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false 동일한 값을 넣어도 다른 심볼로 만들어짐
// 동일한 심볼을 만들고 싶다면 for함수 이용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol2}`); // error 
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // 항상 .description을 이용해서 스트링으로 변환 후 출력해야함

// object , real-life object, data structure
// object는 우리가 일상에서 보는 물건과 물체들을 대표할 수 있는 박스형태를 말함
const go = { name: 'gildong', age: 44};
console.log(go.age);
go.age = 45; 
console.log(go.age);

// 자바스크립트는 Dynamic typing: dynamically typed language 불림:  변수를 선언할때 어떤 타입인지를 선언하지 않고 런타임, 프로그램이 동작할때 할당된 값에 따라서 타입이 변경될 수 있음
// C, Java 언어는 statically typed language : 변수를 선언할 때 어떤 타입인지를 결정해서 타입을 같이 선언
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);  // string 
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);  // number
text = '7' + 5; 
console.log(`value: ${text}, type: ${typeof text}`);  // string
text = '8' / '2'; // 스트링 안에 실제 값이 숫자이기 때문에 숫자로 연산
console.log(`value: ${text}, type: ${typeof text}`);  // number

