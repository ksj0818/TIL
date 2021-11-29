### mode 변환 기능

Control 컴포넌트 생성 

``` react
  <ul>
        <li>
          <a
            href="/create"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("update");
            }.bind(this)}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }.bind(this)}
          ></input>
        </li>
      </ul>
```

App 컴포넌트에서 로드하기 

``` react
<Control
          onChangeMode={function (_mode) {
            // 이벤트가 실행됐을때 실행되어야 하는 함수를 handler라고도 부른다.
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
        ></Control>
```

