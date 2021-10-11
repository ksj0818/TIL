## React Component생성

- React는 Component와 함께 동작함, 모든 것은 Component임
- react application은 하나의 component만을 rendering함, 그 component가 App임
- component는 HTML을 반환하는 함수
- react는 component를 가져와서 browser가 이해할 수 있는 평범한 일반 HTML로 만듦
  - react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요함
    JS와 HTML 사이의 이러한 조합을 JSX라고 부름, 이건 리액트에서 나온 매우 custom한 유일한 개념, **jsx는 JS안의 HTML임.**
- component 생성 방법
  - src 안에 새로운 파일 생성
  - component를 작성할 때마다 import React from "react"; 를 적어줘야함.
    이것을 하지 않으면 react는 여기에 jsx가 있는 component를 사용하는 것을 이해하지 못함
  - 대문자로 시작하는 function 생성 
    - export default 함수명; 
- component 사용방법
  - App.js에 import 하기

**기억 해야할것은  react application은 한 번에 하나의 component만 rendering할 수 있다는 점, 따라서 모든 것은 application 안에 들어가야만 함**

위에 내용들이 최소한 jsx에서 알아야하는 것들의 절반임


