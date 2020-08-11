## Form Input Binding



~~~ jsp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <%@ include file="../include/header.jsp" %>
</head>
<body>

    <!-- 문자열 -->
    <div id="app-1">
        <input v-model="message"  placeholder="여기에 입력해보세요">
        <p>메시지: {{ message }}</p>
    </div>
    <!-- 여러줄을 가진 문장 -->
    <div id="app-2">
        <span>여러 줄을 가지는 메시지:</span>
        <p style="white-space: pre-line">{{ message }}</p>
        <br>
        <textarea v-model="message" placeholder="여러줄을 입력해보세요"></textarea>
    </div>
    <!-- CHECKBOX -->
    <div id="app-3">
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </div>
    <!-- 여러 개의 체크박스는 같은 배열을 바인딩 할 수 있음--> 
    <div id="app-4">
        <input type="checkbox" id="kim" value="kim" v-model="checkedNames">
        <label for="kim">kim</label>
        <input type="checkbox" id="lee" value="lee" v-model="checkedNames">
        <label for="kim">lee</label>
        <input type="checkbox" id="park" value="park" v-model="checkedNames">
        <label for="kim">park</label>
        <br>
        <span>체크한 이름: {{ checkedNames }}</span>
    </div>    
    <!-- RADIO -->
    <div id="app-5">
        <input type="radio" id="male" value="Male" v-model="picked">
        <label for="one">Male</label>
        <br>
        <input type="radio" id="female" value="Female" v-model="picked">
        <label for="two">Female</label>
        <br>
        <span>gender: {{ picked }}</span>
        <br><br><br>
    </div>

    <!-- 하나의 셀렉트 -->
    <div id="app-6">
        <select v-model="selected">
            <!-- v-model 표현식의 초기 값이 어떤 옵션에도 없으면 <select>엘리먼트는 "선택없음"상태로 랜더링됨
                 IOS에서는 이 경우 변경 이벤트가 발생하지 않아 사용자가 첫 번째 항목을 선택할 수 없게 된다.
                 따라서 위 예제 처럼 사용하지 않는 옵션에 빈 값을 넣는 것이 좋다.-->
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>selected: {{ selected }}</span>
        <br><br><br>
    </div>

    <!-- 다중 셀렉트 -->
    <div id="app-7">
        <select v-model="selected" multiple>
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>selected: {{ selected }}</span>
        <br<br><br>
    </div>

    <!-- v-for 를 이용한 동적 옵션 랜더링 -->
    <div class="app-8">
        <select v-model="selected">
            <option value="A">One</option>
            <option value="B">Two</option>
            <option value="C">Three</option>
        </select>
        <span>selected: {{ selected }}</span>
    </div>
        
    
    <%@ include file="../include/footer.jsp" %>
</body>
<script>

    new Vue({
        el:'#app-1',
        data: {
            message:''
        }
    })

    new Vue({
        el:'#app-2',
        data:{
            message:''
        }
    })

    new Vue({
        el:'#app-3',
        data:{
            checked:false
        }
    })

    new Vue({
        el:'#app-4',
        data:{
            checkedNames:[]
        }
    })

    new Vue({
        el:'#app-5',
        data:{
            picked:''
        }
    })
    
     new Vue({
         el:'#app-6',
         data:{
             selected:''
         }
     })

     new Vue({
        el:'#app-7',
        data:{
            selected:''
        }
    })

    new Vue({
        el:'#app-8',
        data:{
            selected: 'A',
            options:[
                { text: 'One', value: 'A'},
                { text: 'Two', value: 'B'},
                { text: 'Three', value: 'C'}
            ]
        }
    })
</script>
</html>
~~~

