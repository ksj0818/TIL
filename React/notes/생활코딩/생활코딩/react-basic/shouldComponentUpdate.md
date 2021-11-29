## shouldComponentUpdate

- 렌더함수 이전에 실행된다.
- 컴포넌트의 렌더함수가 실행될지 실행되지 않을지를 결정할 수 있도록 제공하는 함수
- 2개의 매개변수를 갖도록 약속 되어 있음
  1. newProps
  2. newState
- return true; 는 바뀔때마다 렌더함수 호출
- return false; 는 랜더함수 호출 안함.
- 이전 값과 변경된 값이 다르면 렌더함수 호출
- setState의 값을 변경 시 원본을 변경하지말고 복제본을 수정하기

``` react
shouldComponentUpdate(newProps, newState) {
    console.log(newProps.data, this.props.data);
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
```

- 원본을 바꾸지 않는다 라는 것을 불변성이라고함 (immutable)

``` react
let newContents = Array.from(this.state.contents);	// Array.from을 이용해서 복사본 배열 생성
	newContents.push({	// 복사본 변수에 데이터 넣기
        id: this.max_content_id,
        title: _title,
        desc: _desc,
    });
this.setState({
    // state 컨텐츠에 데이터 추가
    contents: newContents,
});
```

- 객체의 경우 객체의 내용을 바꾸지 않고 새로운 복제된 객체를 생성하고 싶을때 Object.assign()을 이용하면 된다.