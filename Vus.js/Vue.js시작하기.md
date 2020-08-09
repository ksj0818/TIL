##  Vue.js시작하기

- Vue란?
  Vue(/vjuː/ 로 발음, **view** 와 발음이 같습니다.)는 사용자 인터페이스를 만들기 위한 **프로그레시브 프레임워크** 입니다. 다른 단일형 프레임워크와 달리 Vue는 점진적으로 채택할 수 있도록 설계하였습니다. 핵심 라이브러리는 뷰 레이어만 초점을 맞추어 다른 라이브러리나 기존 프로젝트와의 통합이 매우 쉽습니다. 그리고 Vue는 [현대적 도구](https://kr.vuejs.org/v2/guide/single-file-components.html) 및 [지원하는 라이브러리](https://github.com/vuejs/awesome-vue#components--libraries)와 함께 사용한다면 정교한 단일 페이지 응용프로그램을 완벽하게 지원할 수 있습니다. 
  출처 : https://kr.vuejs.org/v2/guide/index.html

- Vue.js 코어의 가장 기본적인 기능

~~~ jsp
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TestVue!</title>
    <%@ include file="../include/header.jsp" %>
</head>
<body>
    
    <div id="app">
        {{ message }}
    </div>

    <div id="app-2">
        <!-- v-bind 속성은 디렉티브 라고함 (각 디렉티브마다 고유한 기능이 있다 ex> v-for 반복문.). Vue에서 제공하는 특수 속성임 -v 접두어가 붙음 -->
        <span v-bind:title="message">
            내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다.
        </span>
    </div>

    <div id="app-3">
        <p v-if="seen">이제 나를 볼 수 있어요</p>
    </div>

    <div id="app-4">
        <ol>
            <!-- todos 배열에 있는 값들을 하나씩 todo에 넣고 출력.-->
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
    </div>

    <div id="app-5">
        <!-- Hello Vue.js 출력 -->
        <p>{{ message }}</p> 
        <!-- button 클릭 시 Vue 인스턴스 Methods의 reverseMessage 기능으로 이동 -->
        <button v-on:click="reverseMessage" class="btn btn-warning">메시지 뒤집기</button>
    </div>

    <!-- Vue는 양식에 대한 입력과 앱 상태를 양방향으로 바인딩하는 v-model 디렉티브를 제공 (타자연습이 생각나는 기능)-->
    <div id="app-6">
        <p>{{ message }}</p>
        <input v-model="message">
    </div>
    
    <div id="app-7">
        <ol>
            <!-- 각 todo-item 에 todo 객체를 제공
                 화면에 나오므로, 각 항목의 컨텐츠는 동적으로 바뀔 수 있음
                 또한 각 구성 요소에 "키"를 제공해야함.(나중에 설명 됨)
            -->
            <todo-item
                v-for="item in groceryList"
                v-bind:todo="item"
                v-bind:key="item.id"
            ></todo-item>
        </ol>
    </div>



    <%@ include file="../include/footer.jsp" %>
</body>

<script>

    // 데이터 객체
    var data = { a: 1}
    
    // Vue 인스턴스에 데이터 객체를 추가
    var vm = new Vue ({
        data: data
    })

    // 인스턴스에 있는 속성은 원본 데이터에 있는 값을 반환함.
    vm.a === data.a // true

    // 인스턴스에 있는 속성값을 변경하면 원본 데이터에도 영향
    vm.a = 2 
    data.a // => 2 

    // ... 반대로 마찬가지
    data.a = 3 
    vm.a // => 3


    // app Vue 인스턴스 생성 
    var app = new Vue({
        el: '#app',
        data: {
            // 브라우저 javascript console창에서 app.message = '메시지 수정' 입력하면 출력이 바뀌는 걸 확인할 수 있음. 
            message: 'Hello Vue!'
        }
    }) 
    
    var app2 = new Vue({
        el:'#app-2',
        data:{

            message: '이 페이지는' + new Date() + ' 에 로드 되었습니다.'
        }
    })

    var app3 = new Vue({
        el:'#app-3',
        data: {
            // false시 문자열 안보임
            seen:true
        }
    })

    var app4 = new Vue({
        el:'#app-4',
        data:{
            todos:[
                { text: 'JavaScript 배우기'},
                { text: 'Vue 배우기'},
                { text: '무언가 멋진 것을 만들기'}
                // console창에서 app4.todos.push({ text: 'New Item' }) 입력 시 todo목록에 새 항목이 동적으로 추가.
                //               app4.todos.pop({ tesxt: '' } 입력 시 가장 나중에 들어온 데이터 삭제 LIFO 
            ]
        }
    })

    var app5 = new Vue({
        el:'#app-5',
        data:{
            message: 'Hello Vue.js!!!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })

    var app6 = new Vue({
        el: '#app-6',
        data:{
            message: '메시지를 입력해 주세요!'
        }
    })

    // todo-item 이름을 가진 컴포넌트를 정의
    Vue.component('todo-item', {
        // todo-item 컴포넌트는 "prop" 이라고 하는 
        // 사용자 정의 속성 같은 것을 입력 받을 수 있다
        // prop은 todo라는 이름으로 정의
        props: ['todo'],
        template: '<li> {{ todo.text }}</li>'
    })

    var app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese ' }, 
                { id: 2, text: 'Whatever else humans are supposed to eat' }
            ]
        }
    })
</script>
</html>
~~~

