## Vue.js  DB Insert

~~~ jsp
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입</title>
    <%@ include file="../include/header.jsp" %>
</head>
<body>
    <div id="addMember">
        <div class="col"> 
            <div class="col mt-4">
                <label>이메일:</label>
                <input type="text" v-model="email">
            </div>
            <div class="col mt-4">
                <label>패스워드:</label>
                <input type="password" v-model="password">
            </div>
            <div class="col mt-4">
                <label>이름:</label>
                <input type="text" v-model="name">
            </div>
            <div class="col mt-4">
                <input type="radio" id="male" v-model="gender" value="male">
                <label for="male">남성</label>
                <input type="radio" id="female" v-model="gender" value="female">
                <label for="female">여성</label>
            </div>
            <!-- 버튼 클릭 시 addAction() 메서드 호출 -->
            <button @click="addAction">가입</button>
        </div>
    </div>

    <%@ include file="../include/footer.jsp" %>

</body>
<script>

    $(function() {  // 페이지가 준비되면 실행.
        joinVue();	// joinVue() 메서드 호출
    });
    
    var joinVue = function() {	 // joinVue() 메소드 생성
        addMember = new Vue({	 // addMember 인스턴스 생성 
            el:'#addMember',	 // 엘리먼트 addMember 정의
            data: {				 // addMember엘리먼트의 데이터(변수)들 정의
                email: '',
                password: '',
                name: '',
                gender: '',
            },
            created: function(){	// methods: 실행된 후 실행

            },
            methods: {
                addMember: function(){	// addMember() 메서드 생성
                    // self 변수 생성 및 초기화 그냥 this를 사용해도 되지만 나중에 혹시모를 에러?충돌?
					// 방지하기 위해서 self 변수에 this를 넣어준다.
                    var self = this;	
                    	// insert를 하기 때문에 axios.post를 사용 서버단 controller에 매핑된 URI를 넣어주고
						// data(변수)들 입력받은 값들로 초기화
                        axios.post('/api/memberInsert', {
                            email : self.email,
                            password: self.password,
                            name : self.name,
                            gender: self.gender
                        })
                    	// 오류 없이 쿼리문 성공 시 실행
                        .then(result => {
                            console.log(result);	// 콘솔창으로 result값 출력
                            alert("회원가입을 축하드립니다!")	
                            self.email = '',		// 각 data들 공백으로 초기화
                            self.password = '',
                            self.name = '',
                            self.gender = '';
                        })
                    	// 에러 발생 시 실행 
                        .chach(error => {
                        	// 콘솔창으로 에러 메세지 출력
                            console.log(error);	
                        })
                    },
                    // HTML에서 가입버튼 클릭 시 실행되는 메소드
                    addAction: function(){	
                    // 위에 정의한 메서드 addMember() 호출
                        this.addMember();	
                    }
            }

        });
        return addMember;
    }
</script>
</html>

~~~

