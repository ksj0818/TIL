## Vue.js DB Select

~~~ jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>멤버 목록 조회</title>
    <%@ include file="../include/header.jsp" %>
</head>
<body>
    <h2>멤버 목록 조회</h2>
    <div id="readMember">
        <input type="text" v-model="keyword" @input="changeKeyword" placeholder="이름을 입력해 주세요."> 
        <button @click="searchMember" class="btn btn-outline-primary btn-sm">검색</button>
        <div v-for="member in members">
            {{ member.name}}
            {{ member.gender}}
            {{ member.email}}
        </div>
    </div>
    
    <%@ include file="../include/footer.jsp" %>
</body>
<script>
    $(function(){   // 페이지가 준비되면 실행.
        selectVue();
    });

    var selectVue = function(){
        readMember = new Vue({
            el:'#readMember',
            data: {
                members:[],
                keyword:'',
            },
            created: function(){    // method가 생성될 때 실행 
                this.getMember();
            },
            methods: {
                getMember: function(){
                    var self = this;
                    axios.get('/api/members', {
                        params: {       // get매핑 사용 시 params 사용
                            name: self.keyword      
                        }
                    })
                    .then(result => {
                        self.members = result.data  // data객체안에 정의한 members[]배열에 결과값 넣어주기
                        console.log(result)         
                    })
                    .catch(error => {
                        notice(error, false)
                    });
                },
                changeKeyword: function() {     // @input="changeKeyword" 입력할 때마다 메서드 실행
                    console.log(this.keyword);
                    this.getMember();
                },
                searchMember: function() {      // 검색 버튼 클릭 시 실행
                    this.getMember();
                }
            }
        })
        return readMember;
    }
</script>
</html>
~~~

