## web Storage

# 목차

1. localStorage
2. sessionStorage
3. indexedDB
4. Web SQL
5. Cookie
6. Trust Token



**Web Storage**
서버가 아닌, 클라이언트에 데이터를 저장할 수 있도록 지원하는 HTML5의 새로운 기능이다.
종류로는 *로컬 스토리지(Local Storage)* 와 *세션 스토리지(Session Storage)* 가 있다.
둘 다 키와 값을 저장할 수 있는, Key-Value 구조의 형태다.

- **localStorage**
  - window.localStorage 객체
  - 브라우저를 종료해도 유지되는 데이터로, 명시적으로 지우지 않는 한 영구적으로 저장된다.
  - 도메인별로 생성되며, 다른 도메인의 로컬 스토리지에는 접근이 불가능하다
  - 서로 다른 브라우저 탭이라도 동일한 도메인이라면 동일한 로컬 스토리지를 사용한다.
  - 지속적으로 필요한 정보를 저장하기에 좋다. (ex. 자동 로그인 등)
  - 최대 10mb 만 저장이 가능하다.
- **sessionStorage**
  - window.sessionStorage 객체
  - 세션 쿠키와 달리, 탭/윈도우 단위로 세션 스토리지가 생성된다.
  - window 객체와 동일한 유효 범위 및 생존 기간을 가지며, 탭/윈도우를 닫을 시 데이터가 삭제된다.
  - 동일한 탭/윈도우라도 다른 도메인이라면 또 다른 세션 스토리지가 생성된다.
  - 서로 다른 세션 스토리지는 서로 영향을 주지 않으며 독립적으로 동작한다.
  - 윈도우 복제로 생성된 경우, 혹은 스크립트로 새 창을 연 경우 세션 스토리지가 복제되어 생성된다.
  - 잠시 동안 필요한 정보를 저장하기에 좋다. (ex. 입력 폼 저장, 일회성 로그인, 장바구니 등)
  - 최대 10mb 만 저장이 가능하다.

- **indexedDB**
  - Indexed Database API 또는 IndexedDB (과거 이름: WebSimpleDB) 는 색인이 포함된 JSON 객체가 모여있는 트랜잭셔널 로컬 데이터베이스를 위해 W3C 가 권고한 웹 브라우저 표준 인터페이스의 하나이다.
  - Transaction Database 를 사용하여 Key-Value 로 데이터를 관리하며, B-Tree 데이터 구조를 가진다.
    *B트리는 이진트리에서 발전되어 모든 리프노드들이 같은 레벨을 가질 수 있도록 자동으로 벨런스를 맞추는 트리이다. 
  - Transaction Model 을 따르며, 모든 변경은 Transaction 안에서 일어난다.
    *트랜잭션(Transaction)이란, 데이터베이스의 상태를 변화시키기 해서 수행하는 작업의 단위를 뜻한다.
  - same-origin policy(동일 출처 정책)을 따르기 때문에, http 도메인에서 만든 IndexedDB 는 다른 https 도메인에서는 접근할 수 없다.
  - 만약 Transaction 내에서 문제가 생긴다면, 모든 변경사항을 폐기되고 이전 상태로 돌아간다.
  - 데이터는 영속적으로 유지되지만, 특정 상황에 따라 삭제될 수 있다.
  - JavaScript가 이해하는 어떠한 값이라도 모두 저장 가능하다.
  - 용량 제한은 없으나 SSD(solid-state drive) 및 브라우저의 상태에 따라 달라진다.
- **Web** **SQL**
  - 웹 브라우저에 내장되어 있는 관계형 DB이다.
  - Web Storage 의 경우 비교적 적은양의 간단한 데이터를 저장하기에 적합한 로컬 저장소인 반면
    Web SQL은 보다 구조적이고 체계화된 관계형 데이터를 대량으로 저장하기에 적합하다.
  - 그러나 현재 W3C가 사양정책 작업을 중지하였다.
  - 독립된 언어를 기반으로 하기 때문에 브라우저간 문제가 될 소지가 있기 때문이다.
  - 새로운 대안으로 IndexedDB를 제시하고 있다.
- **Cookie**
  - 하이퍼 텍스트의 기록서([HTTP](https://ko.wikipedia.org/wiki/HTTP))의 일종으로서 [인터넷](https://ko.wikipedia.org/wiki/인터넷) 사용자가 어떠한 웹사이트를 방문할 경우,
    그 사이트가 사용하고 있는 서버를 통해 인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 일컫는다.
  - 쿠키는 만료 기간이 있는 키 - 값 저장소이다.
  - 4KB의 용량 제한이 있다.
  - HTTP 요청은 상태를 가지고 있지 않다(**Stateless**)
    예를 들면 브라우저에서 서버로 나에 대한 정보를 가져오라는 Get /Me라는 요청을 보낼 때,
    서버는 요청 자체만으로는 그 요청이 누구에게서 오는지 알 수 없기 때문에 응답을 보낼 수가 없다.
    이때 쿠키에 나에 대한 정보를 담아서 서버로 보내면 서버는 쿠키를 읽어서 내가 누군지 파악한다.
- **Trust Token**
  - 패시브 추적 없이 사기를 방지하고 실제 사람과 봇을 구별하는 데 도움을 주는 새로운 API이다.
  - 신뢰 토큰은 사용자에 대한 신뢰를 구축하는 것이 아니라 사용자에 대한 신뢰를 전달하는 방법이다.







출처: https://shplab.tistory.com/entry/%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%B8%EC%85%98-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-Indexed-DB-%EB%9E%80-%EB%B9%84%EA%B5%90%EB%B6%84%EC%84%9D

출처: https://tristan91.tistory.com/521

출처: https://pks2974.medium.com/indexeddb-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-ca9be4add614

출처: https://lemonreadingbox.tistory.com/110

출처: https://developer.chrome.com/ko/docs/privacy-sandbox/trust-tokens/