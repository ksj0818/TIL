## Lifecycle Hook / useEffect

- LifeCycle Hook

``` react
class Detail extends React.Component {
    componentDidMount() {
        // Detail 컴포넌트가 Mount 되었을 때 실행할 코드
        // (컴포넌트가 생성될 때)
    }
    componentWillUnmount() {
        // Detail 컴포넌트가 ummount 되기 직전에 실행할 코드
        // (컴포넌트가 종료될 때)
    }
}
```

- useEffect
  - 컴포넌트가 mount, 업데이트 되었을 때 특정 코드를 실행
  - 콜백함수 안에는 **Detail 컴포넌트가 첫 등장하고나서 실행하고싶은 코드**가 있으면 적어주면 됩니다.
  - 

``` react
import React, {useEffect} from 'react';
function Detail2(props) {
    useEffect(()=>{
        console.log(11111)
    });
}
```

