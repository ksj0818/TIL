## router설치

- 라우팅: 페이지 나누기

- react-router-dom@5 라이브러리 설치

  - yarn add react-router-dom@5

- 설치 후 세팅

  - index.js 

  - import { BrowserRouter } *from* "react-router-dom"; 

    ``` react
    import { BrowserRouter } from "react-router-dom";
    
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
    ```

    

- 라우트 만들기 (페이지 나누기)

  1. import 하기
     *import* { Link, Route, Switch } *from* "react-router-dom";
  2. Route 만들기
     <Route path="/"></Route>
  3. <Route path="/test" component={Test}></Route>
     컴포넌트 속성안에 이름 넣기

- /해당 경로로 접속해도 /경로 내용이 보이는 이유

  - 리액트 라우터는 매칭되는걸 한꺼번에 보여주기 때문
  - 이게 싫다면 exact 를 넣어주기 exact는 정확히 들어왔을때 보여줌
    <Route exact path='/'></Route>

- React-Router 특징

  - 각각 페이지마다 다른 HTML 파일을 보여주는게 아니다.

  - HTML 내부의 내용을 갈아치워서 다른 페이지처럼 흉내내는 것일 뿐입니다

- 페이지 이동하는 버튼만들기

  - href 지우기
  - <Link to='/'>버튼</Link>

- url 파라미터

  - /:id 아무문자나 받겠다는 URL 작명법

