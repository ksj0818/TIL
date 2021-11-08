## Indexed DB, Web Storage, Cookie 사용법

### 목 차

1. Cookie 사용법
2. Web Storage 사용법
3. Indexed DB 사용법
4. 출처

- Cookie 사용법

  1. 쿠키 만들기

     ``` js
     function setCookie(key, value, expiredays) {
         let todayDate = new Date();
         todayDate.setDate(todayDate.getDate() + expiredays);
         document.cookie = key + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
     }
     ```

     <u>쿠키는 key/value 쌍으로 이루어지기 때문에 함수 호출 시에 key/value를 넘겨준다. 그리고 해당 쿠키의 만료일(expiredays)을 지정해 주면 된다. 만료일이 지나면 쿠키는 해당 브라우저 쿠키 정보에서 삭제 된다.</u>

  2. 쿠키 가져오기

     ``` js
      function getCookie(key) {
         var result = null;
         var cookie = document.cookie.split(';');
         cookie.some(function (item) {
             // 공백을 제거
             item = item.replace(' ', '');
      
             var dic = item.split('=');
      
             if (key === dic[0]) {
                 result = dic[1];
                 return true;    // break;
             }
         });
         return result;
     }
     ```

     <u>쿠키에 어떠한 정보가 있는지 알아오기 위해서는 document.cookie 를 이용하면 된다.</u>
     <u>하지만 쿠키를 만들때 key/value를 지정하였으므로 key값을 가지고 value를 가져올 수 있게끔 함수를 만들었다.</u>

  3. 팝업에서 쿠키를 응용한 사용 방법
     요즘엔 팝업이 많이 사용되지 않고 있다. 하지만 가끔 팝업을 볼 수 있다.
     
     ``` js
     // 팝업을 실행해주는 페이지 (parent)
     let popup = getCookie("eventpopup");
     if (popup != "false") {
         // 팝업 실행
     }
      
     // 팝업 페이지
     function closeWindow() {
         let check = document.getElementById("check");
         if (check.checked) {
             setCookie("eventpopup", "false", 1);
         }
         self.close();
     }
     ```
     
  
- Web Storage 사용법
  localStorage, sessionStorage의 사용법은 거의 동일하다.

  - 데이터 추가 방법 3가지
    3가지 방법 모두 데이터가 저장되는 방식은 같다.
    키와 값으로 저장된다.

    ```js
    function init() {
    	//localStorage 데이터 추가 방법 3가지
    	localStorage.Test = "Sample";
    	localStorage["Test"] = "Sample";
    	localStorage.setItem("Test", "Sample");
    }
    ```
    
  - 데이터 취득 방법 3가지

    ```js
    function init() {
    	//LocalStorage 데이터 취득 방법 3가지
    	let val = localStorage.Test;
    	let val = localStorage["Test"];
    	let val = localStorage.getItem("Test");
    
    	//취득 데이터 출력
    	document.querySelector("#result").innerHTML = val;
    }
    ```

  - 데이터 삭제하기
    삭제는 removeItem(key)를 사용, removeItem(key) 실행 시 해당 키와 값을 삭제한다.

    ```js
    function init() {
    	//localStorage 데이터 삭제
    	localStorage.removeItem("Test"); 
    }
    ```

    모든 데이터 삭제
    clear()는 localStorage에 저장한 모든 데이터를 삭제한다.

    ``` js
    function init() {
    	//localStorage 모든 데이터 삭제
    	localStorage.clear(); 
    }
    ```

- *Indexed DB 사용법*

  1. DB 만들기

     - 브라우저는 여러개의 Database를 가질 수 있다.

     - Database에는 Version정보가 있고 여러 개의 ObjectStore를 가질 수 있다. (Database 수정시에는 Version을 수정해야 한다.)

     - indexedDB.open(db_name, version) 함수로 Database를 열도록 요청한다.

     ``` js
     // 지원여부확인
     if (!window.indexedDB) {
         window.alert("browser doesn't support IndexedDB")
     } else {
         let db;
         let request = window.indexedDB.open('myDataBase');
         
         request.onerror = function(event) {	// 에러가 발생할 때
         	alert('failed');	
         }
         request.onsuccess = function(event) {	// 성공적으로 DB생성
         	db = request.result;	
         }
     }
     ```

  2. *ObjectStore 만들기*
     데이터를 담는 공간,  여러개의 레코드 (Key-Value)를 가진다.
     ObjectStore의 이름은 고유해야 한다.
     IDBRequest.createObjectStore() 함수로 만든다.

     ``` js
         // 새로만들거나 버전이 높을때만 발생하는 이벤트 
         // ObjectStroe를 만들거나 수정할때 이 이벤트내에서 진행
         // onsuccess는 이 이벤트가 끝나면 발생됩니다.
         request.onupgradeneeded = function(event) {
         	let db = event.target.result;
             // person 이라는 이름으로 ObjectStore를 만듬, key를 따로 만들지 않고 자동생성함.
             let objectStore = db.createObjectStore('person', {keyPath: 'id'});
         }
     ```

  3. *ObjectStore에 데이터 입력하기*
     DB를 연 다음 Transaction을 통해 ObjectStore에 접근하여 입력하기
     브라우저 개발자 도구의 Application -> indexedDB에 데이터가 들어간다.

     ``` js
     function writeIndexedDB(people) {
         let request = window.indexedDB.open('myDataBase');
         
         request.onerror = function(event) {
         	alert('Database error: ' + event.target.errorCode);
         }
         request.onsuccess = function(event) {
         	let db = this.result;
         	// person ObjectStore에 readwrite(읽기,쓰기) 권한으로 Transaction 생성
         	let transaction = db.transaction(['person'], 'readwrite');
             
             // 완료 및 실패 이벤트 제어
             transaction.oncomplete = function(event) {
             	console.log('done');
             }
             transaction.onerror = function(event) {
             	console.log('fail');
             }
             
             let objectStore = transaction.objectStore('person');
             for(let person of people) {
                 let request = objectStore.add(person);
                 request.onsuccess = function(event) {
                 	console.log(event.target.result);
                 }
             }
         }
     }
     
     let people = [{
                       id: 1
                     , name: 'Aiden'
                     , age: 25
                     , height: 178
                   },
                   {
                   	  id: 2
                     , name: 'Matthew'
                     , age: 22
                     , height: 182
                   },
                   {
                   	  id: 3
                     , name: 'John'
                     , age: 26
                     , height: 174
                   }];
     
     writeIndexedDB(people);
     ```

  4. *ObjectStore에 데이터 조회하기*
     DB를 연 다음 Transaction을 통해 ObjectStore에 접근하여 조회하기, key를 통해 Value를 가져올 수 있다.

     ```js
     function selectOneIndexedDB(key) {
         let request = window.indexedDB.open('myDataBase');
         
         request.onerror = function(event) {
         	console.log(event.target.errorCode);
         }
         request.onsuccess = function(event) {
         	let db = this.result;
             let transaction = db.transaction(['person']);
             
             transaction.onerror = function(event) {
             	console.log('fail');
             }
             transaction.oncomplete = function(event) {
             	console.log(result);
             	console.log('done');
             }
             
             let objectStore = transaction.objectStore('person');
             request = objectStore.get(key);
             request.onsuccess = function(event) {
             	result = event.target.result;
             }
         }
     }
     ```

  5. *ObjectStore에 데이터 수정하기*
     DB를 연다음 Transaction을 통해 ObjectStore에 접근하여 조회하기
     key를 통해 Value를 Update 한다.

     ``` js
     function updateIndexedDB(key, value) {
     	let request = window.indexedDB.open('myDataBase');
         
         request.onerror = function(event) {
         	console.log(event.target.errorCode);
         }
         request.onsuccess = function(event) {
         	let db = this.result;
             let transaction = db.transaction(['person'], 'readwrite');
             
             transaction.onerror = function(event) {
             	console.log('fail');
             }
             transaction.onsuccess = function(event) {
             	console.log('done');
             }
             
             let objectStore = transaction.objectStore('person');
             request = objectStore.get(key);
             request.onsuccess = function(event) {
                 let data = event.target.result;
                 data = value;
                 
                 let updateRequest = objectStore.put(data);
                 updateRequest.onerror = function(event) {
                 	console.log('update error');
                 }
                 updateRequest.onsuccess = function(event) {
                 	console.log('update success');
                 }
             }
         }
     }
     updateIndexedDB(1, {id:1, name:'Aiden', age:30, height:180});
     ```

  6. ObjectStore에 데이터 삭제하기
      DB를 연다음 Transaction 을통해 ObjectStore에 접근하여 조회하기. key를 통해 값을 삭제

     ``` js
     function deleteIndexedDB(key) {
     	let request = window.indexedDB.open('myDataBase');
         
         request.onerror = function(event) {
         	alert(event.target.errorCode);
         }
         request.onsuccess = function(event) {
         	let db = this.result;
             let transaction = db.transaction(['person'], 'readwrite');
             
             transaction.onerror = function(event) {
             	console.log('fail');
             }
             transaction.onsuccess = function(evnet) {
             	console.log('done');
             }
             
             let objectStore = transaction.objectStore('person');
             // delete()대신 clear() 함수를 통해 데이터 전체 삭제할 수 있다
             let deleteReqeust = objectStore.delete(key);	
             deleteReqeust.onsuccess = function(event) {
             	console.log('deleted');
             }
         }
     }
     ```

     



- 출처

  - https://im-first-rate.tistory.com/33

  - https://ponyozzang.tistory.com/341
  - https://lcs1245.tistory.com/entry/IndexedDB-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%95%EB%A6%AC

