## styled-components를 이용한 class없는 CSS스타일링

- styled-components는 라이브러리인데 컴포넌트를 만들다 보면 CSS 짜기 난감한 경우가 있음.

  1. 컴포넌트가 매우 많은 경우
  2. 클래스명 중복 선언 등등

- CSS랑 컴포넌트를 혼연일체 시켜놓는 것이 이 라이브러리의 사용법이다.

- 설치방법

  - yarn add styled-components

  - ``` react
    import styled from 'styled-components';
    ```

- 클래스명 안쓰고 스타일 컴포넌트를 이용해서 구현하기

  ``` react
  let box = styled.div`padding: 20px`
  ```

- 스타일 컴포넌트는 CSS를 미리 입혀놓은 컴포넌트 만들어서 이용하는것

