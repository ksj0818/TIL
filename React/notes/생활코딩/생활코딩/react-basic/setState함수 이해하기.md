### setState함수 이해하기

- state값을 직접 변경하면 error (생성자에서는 가능)
- 동적으로 변경 시에는 setState함수를 이용해서 변경해야한다.
- 그 이유는 리액트 입장에서는 직접 바꿔버리면 몰래 바꾼셈임(리액트 모르게) 그러니 렌더링을 할 수가 없는 것이다.
- 

``` react
 <a
              href="/"
              onClick={function (e) {
                e.preventDefault();
                // 이벤트가 호출되었을때 실행되는 함수 안에서는 this의 값이 컴포넌트 자기 자신을 가리키지 않고 아무 값도 세팅 되어있지 않음. 그렇기 때문에 undefined의 state를 읽으려고 했더니 error발생.
                // 이벤트를 설치할 때 this를 찾을 수 없어서 error가 발생하면 그냥 .bind(this)함수를 이벤트함수가 끝난 직후에 넣어주면된다.
                // this.state.mode = "welcome"; 이렇게 짜면 리액트는 state가 바뀐걸 모름
                this.setState({			// setState()를 이용해서 변경하기
                  mode: "welcome",
                });
              }.bind(this)}				// 이벤트 설치 후 바로 바인드 해주기
            >
              {this.state.subject.title}
            </a>
```

