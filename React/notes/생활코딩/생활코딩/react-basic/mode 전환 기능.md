### mode 전환 기능

``` react
 let _title,
      _desc,
      _article = null;

    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      // 기존에 있었던 리드컨텐츠를 아티클에 넣어줌
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      let i = 0;
      // state의 컨텐츠 길이보다 작을때 true
      while (i < this.state.contents.length) {
        // 컨텐츠의 데이터를 인덱스 순으로 data에 넣기
        let data = this.state.contents[i];
        // 컨텐츠id와 셀렉트id가 같다면 본문 내용 출력
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i += 1;
      }
      // 기존에 있었던 리드컨텐츠를 아티클에 넣어줌
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "create") {
      _article = <CreateContent></CreateContent>;
    }       


<Control
          onChangeMode={function (_mode) {
            // 이벤트가 실행됐을때 실행되어야 하는 함수를 handler라고도 부른다.
            this.setState({
              mode: _mode,
            });
          }.bind(this)}
></Control>

        {/* 가변적으로 변할수 있도록 하기 위해 변수 사용 */}
        {_article}
```

