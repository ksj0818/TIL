### Props VS State

- Props
  - read-only
  - 수정 불가
  - 컴포넌트 안에서 자기로 전달된 props 값을 변경하는것은 불가능하다.
    (컴포넌트 밖에선 당연히 가능)
- State
  - asynchronous
  - 수정시 this.setState()로 수정한다.