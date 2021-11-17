## props

``` react
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Subject title="Web" sub="world wide web"></Subject>
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
```



- HTML 태그에서는 속성을 Attribute라고 하는데 리액트는 props라고 한다.
- Subject가 실행될 때 title,sub 속성을 컴포넌트가 알아내서 위치 시킬수 있어야겠죠?
  이때 사용하기로 약속된 JSX의 기호가 {}이다.
- 속성 리액트에서는 props라고 하니 props를 받아서 그것을 바탕으로 해서 또 다른 결과를 만들어내는 훨씬 더 똑똑한 컴포넌트를 만들 수 있게 됨.

