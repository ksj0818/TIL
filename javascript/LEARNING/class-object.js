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
    console.log(`${this.name}: Hello!`);
  }
}

const goGilDong = new Person('goGilDong', 44);
console.log(goGilDong.name);
console.log(goGilDong.age);
goGilDong.speak();