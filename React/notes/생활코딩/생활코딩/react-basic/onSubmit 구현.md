### onSubmit구현

submit 버튼을 클릭 후 onSubmit 이벤트가 실행 되었을 때 app 컴포넌트의 contents라는 데이터의 끝에다가 데이터를 추가하는 방법

App.js mode가 create일 때 onSubmit

``` react
else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          // CreateContents 컴포넌트에서 넘겨받은 입력데이터를 				인자값으로 받기
          onSubmit={function (_title, _desc) {
          // add contents to this.state.contents
          }.bind(this)}
        ></CreateContent>
      );
    }
```

CreateContent.js

``` react
	<article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
           // form태그에서 입력받은 데이터를 인자값으로 넘겨주기
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
```

