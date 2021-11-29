## 데이터 Update

1. CreateContent 복사 

2. UpdateContent로 이름 변경

3. APP.js 임포트

4. 업데이트 컴포넌트 생성 (mode:'update')

5. getContent() 생성 후 _article 리턴

6. UpdateContent 컴포넌트가 실행될 때 입력값으로 현재 선택된 컨텐츠 아이디 가져오기

7. getReadContent() 생성 

8. mode:'read'일 때 부분 수정

9. mode:'update' 업데이트컨텐츠 컴포넌트에서 data={_content}주기

10. update: form 구현
    업데이트 컴포넌트 input 태그에서 value={this.props.data.title} 이러면 error남 프롭스의 데이터는 readonly임
     state화 해야 변경가능 onChange props를 꼭 써야함 

    ``` react
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  value={this.state.title}
                  onChange={function (e) {
                    this.setState({
                      title: e.target.value,
                    });
                  }.bind(this)}
                />
    ```

11. onChang 중복 제거를 위한 함수 생성

    ``` react
      // onChange 중복제거
      inputFormHandler(e) {
        this.setState({
          title: e.target.value,
        });
      }
      // input 태그 적용
      onChange={this.inputFormHandler.bind(this)}
    ```

12. 이벤트가 발생하고 있는 태그의 이름이 무엇인지 알아내는 코드를 넣어주기

    ``` react
      // onChange 중복제거
      inputFormHandler(e) {
        this.setState({
          [e.target.name]: e.target.value,	
        });
      }
    ```

13. 중복되는 bind(this) 제거

    ``` react
      constructor(props) {
        super(props);
        this.state = {
          title: this.props.data.title,
          desc: this.props.data.desc,
        };
        this.inputFormHandler = 							this.inputFormHandler.bind(this);
      }
    ```

    