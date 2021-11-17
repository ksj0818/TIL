## 이벤트에서 state 변경하기

``` react
this.state.mode = 'welcome'; // 이런식으로 바꾸면 error
// 이벤트가 호출되었을때 실행되는 함수 안에서는 this의 값이 컴포넌트 자기 자신을 가리키지 않고 아무 값도 세팅 되어있지 않음. 그렇기 때문에 undefined의 state를 읽으려고 했더니 error발생. 
// 이벤트를 설치할 때 this를 찾을 수 없어서 error가 발생하면 그냥 .bind(this)함수를 이벤트함수가 끝난 직후에 넣어주면된다.
```

