// 클래스와 오브젝트의 차이점 , 객체지향언어 클래스 정리

/**
 * 객체지향으로 프로그래밍을 잘하는 개발자들은 풀어야 하는 문제나 
 * 구현해야 하는 기능들을 객체로 잘 정리해서 만들 수 있는 개발자를 말함.
 * 
 * class: template
 * object: instance of a class
 * 클래스 자체에는 데이터가 들어 있지 않고 틀만 템플릿만 정의만 해두는 것
 * 클래스를 이용해서 실제로 데이터를 넣어서 만드는 곳이 오브젝트임, 
 * 클래스를 이용해서 새로운 인스턴스를 생성하면 오브젝트가 됨
 * 
 */

'use strict'

class Person {
  // constructor
  constructor(name, age) {
    // fields 
    this.name = name;
    this.age = age;
  }

  // method 
  speak() {
    console.log(`${this.name}: Hello!!!!`); // this라는 것은 생성된 오브젝트 .(dot)name라고 하기때문에 goGilDong의 이름이 출력
  }
}

const goGilDong = new Person('goGilDong', 44);
console.log(goGilDong.name);
console.log(goGilDong.age);
goGilDong.speak();

// Getter and setters
// 클래스를 사용하는 사용자가 잘못 사용해도 조금더 방어적인 자세로 만들 수 있게 해주는 것

class User { 
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; 
  }

  get age() { // get 키워드를 이용해서 값을 리턴, age라는 getter를 정의하는 순간 this.age는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라 getter를 호출하게 됨
    return this._age; // 필드는 기호가 들어간 에이지가 있지만 .age라고 호출할 수 있는것, 할당할 수 있는 것은 내부적으로 getter, setter를 이용하기 때문
  }

  set age(value) { // set 키워드를 이용해서 값을 설정, setter를 정의하는 순간 =싸인을 호출할 때 바로 메모리의 값을 할당하는 것이 아니라 setter를 호출하게됨, 콜스택 맥시멈을 방지하기 위해서 변수이름을 조금 다르게 만들어줘야함
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// Fields (public, private) 최근에 추가됨, 지금 쓰기엔 너무 이름, 최신 브라우저도 지원안하는게 많음
class Experiment {
  publicField = 2;  // 그냥 정의하면 public, 외부에서 접근 가능
  #privateField = 0; // #기호를 붙이게 되면 private 필드, 클래스 내부에서만 접근 가능
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// static, 이것도 지금 쓰기엔 이르지만 이런게 있다느 것만 알아두기
// 오브젝트에 상관없이 클래스 자체에 연결되어 있음
// 호출할 때는 클래스 이름을 이용
class Article {
  static publisher = 'Hong Gil Dong';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log('printPublisher(): ' + Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);  
// 오브젝트 마다 할당되는 것이 아니라 클래스 자체에 붙어있기 때문에 클래스로 호출
// 나중에 타입스크립트 할때 많이 쓰임
// 어떨때 사용하면 좋을까? > 오브젝트에 상관없이 공통적으로 클래스에서 쓸 수 있는거라면 static과 static 메서드를 이용해서 작성하는것이 메모리의 사용을 조금더 줄여줄 수 있음
console.log(Article.publisher);
Article.printPublisher();

// 객체지향언어에서 하이라이트 상속과 다형성
// Inheritanc
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }

}
class Rectangle extends Shape{}
class Triangle extends Shape{
  // 오버라이딩 (다형성)
  draw() {
    super.draw(); // 공통적으로 정의한 draw() 호출 
    console.log('triangle drew()!');
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {  // Object()에 있는 toString()를 오버라이딩 할 수 있음
    return `Triangle: color: ${this.color}`
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// class checking: instanceOf
// 이 오브젝트는 클래스를 이용해서 만들어진 새로운 인스턴스,
// 왼쪽에 있는 오브젝트 (rectangle)가 오른쪽의 클래스(Rectangle)의 오브젝트 인지 아닌지 확인하는것
console.log(rectangle instanceof Rectangle);   // true
console.log(triangle instanceof Rectangle);    // false
console.log(triangle instanceof Triangle);     // true
console.log(triangle instanceof Shape);        // true 
console.log(triangle instanceof Object);      // 자바스크립트의 모든 오브젝트는 Object를 상속한 것
console.log(triangle.toString());
