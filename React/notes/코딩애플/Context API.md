## Context API

- 컴포넌트 많을 때 props 대신 사용

- 하위 컴포넌트들이 props 없이도 부모의 값을 사용가능

- 중첩해서 사용한 컴포넌트가 많을 때 빛을 발하는 문법이다.

- 중첩이 적다면 그냥 props 쓰는게 가장 편하다.

- context 만들기

  1. ``` react
     // 범위 생성 (App.js)
     export let stockContext = React.createContext();
     ```

  2.  ``` react
      // 같은 값을 공유할 HTML 범위 지정(context.Provider)
      <stockContext.Provider value={stock}>
          <Content data={shoes} />
      </stockContext.Provider>
      ```

  3. ``` react
     // useContext(stockContext)로 공유된 값 사용하기 (Content.js)
     import { stockContext } from "../App";
     
     function Test() {
         // stockContext에 들어있는 state를 변수로 저장
         let stock = useContext(stockContext);
     }
     ```

