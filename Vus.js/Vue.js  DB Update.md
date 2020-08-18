## Vue.js  DB Update

~~~ jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>멤버 수정</title>
    <%@ include file="../include/header.jsp" %>
</head>
<body>
    <div class="container" style="text-align: center;">
        <div id="updateVue" class="col-12 mt-4">
            <div class="col mt-3">
                <h2>멤버 수정</h2>
                <input type="text" v-model="keyword" placeholder="이메일을 입력해 주세요.">
            </div>
            <div class="col mt-3">
                <input type="text" v-model="name" placeholder="이름을 입력해 주세요.">
            </div>
            <div class="col mt-3">
                <input type="text" v-model="password" placeholder="패스워드를 입력해 주세요.">
            </div>
            <div class="col mt-3">
                <button class="btn btn-outline-primary" @click="updateAction">수정</button>
            </div>
        </div>
    </div>

    <%@ include file="../include/footer.jsp" %>
</body>
<script>
    // 페이지가 준비되면 실행
    $(function() {
        memberVue();
    });
    var memberVue = function() {
        updateVue = new Vue({
            el:'#updateVue',
            data: {
                members:[],
                keyword:'',
                name: '',
                password: ''
            },
            created: function() {

            },
            methods: {
                updateMember: function() {
                    var self = this;
                    // 서버단 매핑(putMapping("/api/member"))된 곳에 인자값 전달
                    axios.put("/api/member", {  
                         // 입력받은 값들 data객체 변수에 넣어주기
                        email: self.keyword,   
                        name: self.name,        
                        password: self.password
                    })
                    // 쿼리문 에러 없을 시 data객체에 생성한 members배열에 결과값 넣어주기
                    .then(result => {
                        self.members = result.data;
                        console.log(result);
                        // 결과 상태 코드가 200(성공)시 실행
                        if (result.status == 200) {
                            alert("수정 완료!");
                            self.keyword = '';
                        }
                    })
                    // 쿼리문 에러 발생 시 실행
                    .error(error => {
                        console.log(error)
                    })
                },
                // 실행 버튼 클릭 시 실행
                updateAction: function() {
                    this.updateMember();
                }
            }
        })
    }
</script>
</html>
~~~

