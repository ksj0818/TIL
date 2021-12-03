## Link, Switch, history 기능

- 상세페이지 컴포넌트화(Link)

  - 컴포넌트 만들기(다른 파일) > export 하기 > App.js에서 import하기 

- 페이지 이동하는 버튼 만들기

  - href 지우고 <Link to='/경로'>버튼</Link>

- 페이지 이동시키는 다른 방법 (history)

  - 뒤로가기 버튼 

    ``` react
    import {useHistory} from 'react-router-dom';
    let history = useHistory();	// hook같은 것임
    <button onClick={()=>{
        history.goBack();
       // history.push('/경로') push하면 입력한 경로로 이동
    }}>뒤로가기</button>	
    ```

- Switch

  - **매치되는 <Route> 들을 전부 보여주지 말고 한번에 하나만 보여주세요~** 기능을 만들고 싶을 때 씁니다.(중복 매치 필터링)
  - <Route path="/:id">이게 뭐냐면 URL 파라미터라는 문법인데 그냥 / 슬래시 뒤에 모든 문자가 오면 이 Route로 안내해주세요~를 뜻합니다.

