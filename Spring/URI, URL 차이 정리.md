# URI, URL 차이 정리

- **URL** (Uniform Resource Locator) 
  - 자원
  - 예전에는 URL이 가르키는게 파일 소스 
  - 요즘은 Rewrite등의 아파치, 톰캣등의 핸들러 때문에 자원이라고 부름
  - 웹사이트 주소가 요청하는 파일이라기 보다는, 구분자로 보는 것
  - 웹 상에 서비스를 제공하는 각 서버들에 있는 파일의 위치를 표시하기 위한 것.
    http://blong.com/work/test.pdf 는 blog.com서버에서 work폴더안의 test.pdf를 요청.

- **URI** (Uniform Resource Identifier)

  - 통합 자원 식별자
  - 인터넷에 있는 자원을 나타내는 유일한 주소이다.
  - URI의 존재는 인터넷에서 요구되는 기본조건으로서, 인터넷 프로토콜에 항상 붙어다님.
    ex> http://www.naver.com (http 프로토콜임을 명시하고 있음.)
  - URI의 하위개념에 URL, URN이 포함되어 있다.
  - URI의 보편적인 형태가 URL인데 URI의 부분집합으로 볼 수 있다.
    자원에 접근하기 위해 사용되는 절차
    - 어떤 자원을 가지고 있는 특정한 컴퓨터
    - 컴퓨터 상의 유니크한 자원의 이름(파일명)
  - http://test.co/test.pdf?docid=111 이라는 주소는 URI이지만 URL은 아니다.
    http://test.com/test.pdf 까지만 URL임(주소의 위치)
    - docid=111이라는 쿼리스트링의 값에 따라 결과가 달라지게됨, 따라서 식별자 역할을 하고 있음.
  - http://test.com/test.pdf?docid=111, http://test.com/test.pdf?docid=112는 같은 URL을 가지고 다른 URI를 가짐

- ## URN (Uniform Resource Name)

  - 위치와 상관없이 리소스의 이름값을 이용해서 접근하는 방식
  - 노출된 URL은 http://blog.com/syun/222 인데, http://blog.com/syun/list/323으로 요청을 보내면 404 response를 받는다. 이를 보완하기 위해서 위치 정보와는 무관하게 리소스를 찾을 수 있게 해주는 방식임
  - 해당 리소스의 위치정보가 아닌 실제 리소소의 이름으로 사용하는 방식

## 정리

- URI에는 URL,URN이 포함되어 있다. URL은 URI이지만, URI는 URL이 아니다.
- URL은 인터넷 상의 자원 위치를 나타냄
- URI는 인터넷 상의 자원을 식별하기 위한 문자열의 구성

출처 : 

[https://velog.io/@pa324/%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D-URI-URL-%EC%B0%A8%EC%9D%B4-%EC%A0%95%EB%A6%AC](https://velog.io/@pa324/개발상식-URI-URL-차이-정리)