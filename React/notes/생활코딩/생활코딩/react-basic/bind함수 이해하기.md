## bind함수 이해하기

- onClick bind(this)를 하게 되면 컴포넌트 자체를 가리키는 객체를 함수 안으로 주입해서 그 함수 안에서 this는 객체가 되게 하는 것이다.

  

``` react
 <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                // 이벤트가 호출되었을때 실행되는 함수 안에서는 this의 값이 컴포넌트 자기 자신을 가리키지 않고 아무 값도 세팅 되어있지 않음. 그렇기 때문에 undefined의 state를 읽으려고 했더니 error발생.
                // 이벤트를 설치할 때 this를 찾을 수 없어서 error가 발생하면 그냥 .bind(this)함수를 이벤트함수가 끝난 직후에 넣어주면된다.
                // this.state.mode = "welcome"; 이렇게 짜면 리액트는 state가 바뀐걸 모름
                this.setState({
                  mode: "welcome",
                });
              }.bind(this)}
            >
              {this.state.subject.title}
 </a>
```

