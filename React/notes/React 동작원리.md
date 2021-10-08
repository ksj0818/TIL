## React 동작원리

- react는 당신이 거기에 쓰는 모든 요소를 생성하는 것
  자바스크립트와 함께 그것을 만들고 그것들을 HTML에 밀어 넣음
- localhost를 보면 내가 만든 태그들이 나오는데 (개발자 도구 Elements) 소스코드에서 보면 없음
- 이게 바로 react를 빠르게 하는 이유임
  react는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고 있음. 그래서 application이 이것을 로드할 때, 빈 HTML을 로드하게 되고 그런 다음에 react가 HTML(나의 component에 작성해둔 것들)을 밀어 넣게 됨 이게 react가 동작하는 방식임.
- virtual DOM이라는게 있음
  소스코드에는 존재하지 않음
  react가 그것들을 만들어 내는것

