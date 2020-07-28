## Spring Framework 용어 정리

- 프레임워크 = 기능이 추상적으로 존재하는 틀

- 스프링 프레임워크는 주요기능으로 DI, AOP, MVC, JDBC 등을 제공한다.

- DI(Dependency Injection) 의존성 주입 

  객체 자체가 아니라 Framework에 의해 객체의 의존성이 주입되는 설계 패턴

  Framework에 의해 동적으로 주입되므로 여러 객체 간의 결합이 줄어든다.

  Dependency Injection은 Spring Framework에서 지원하는 IoC의 형태

  Dependency Injection(의존성 주입)과 Inversion Of Control(제어의 역전)은 같은 의미로 사용 된다.

  IoC는 DI를 통해 달성된다.

- IoC(제어의 역전)

  개발자가 모든 제어의 중심이지만 코드 전체에 대한 제어는 Framework가 한다.

  개발자가 설정(xml, annotation 등)만 하면 Container가 알아서 처리한다.

  즉, 우리는 Framework 속에서 프로그래밍을 하는 것.

  #### 의존성 주입 방법 (세 가지)

  1. Contructor Injection

     - 생성자를 통한 전달
     - <contructor-arg ref="cat"></contructor-arg>

  2.  Method(Setter) Injection

     - setter()을 통한 전달
     - <property name="myName" value="poodle"></property>

  3.  Field Injection

     - 멤버 변수를 통한 전달

       (출처 : https://gmlwjd9405.github.io/2018/11/09/dependency-injection.html)

- AOP(Aspect Oriented Programming) 관점 지향 프로그래밍 

  관점 지향은 쉽게 말해 어떤 로직을 기준으로 핵심적인 관점, 부가적인 관점으로 나누어서 보고 

  그 관점을 기준으로 각각 모듈화하겠다는 것이다. 여기서 모듈화란 어떤 공통된 로직이나 기능을 하나의 단위로 묶는 것을 말한다.

  예를 들어 핵심적인 관점은 결국 우리가 적용하고자 하는 핵심 비즈니스 로직이 된다. 또한 부가적인 관점은 핵심 로직을 실행하기 위해서 행해지는 데이터베이스 연결, 로깅, 파일 입출력 등을 예로 들 수 있다.

  AOP에서 각 관점을 기준으로 로직을 모듈화한다는 것은 코드들을 부분적으로 나누어서 모듈화하겠다는 의미다. 이때 소스 코드상에서 다른 부분에 계속 반복해서 쓰는 코드들을 발견할 수 있는데 이것을 흩어진 관심사(Crosscutting Concerns)라 부른다.

- 스프링 AOP 특징 

  프록시 패턴 기반의 AOP구현체, 프록시 객체를 쓰는 이유는 접근 제어 및 부가기능을 추가하기 위해서임.

  스프링 빈에만 AOP를 적용 가능

  모든 AOP 기능을 제공하는 것이 아닌 스프링 IoC와 연동하여 엔터프라이즈 애플리케이션에서 가장 흔한 문제(중복코드, 프록시 클래스 작성의 번거로움, 객체들 간 관계 복잡도 증가...)에 대한 해결책을 지원하는 것이 목적

  (출처 : https://engkimbs.tistory.com/746)