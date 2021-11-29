## JSX

- 태그에 class를 주고 싶으면 className 이용하기 
- 리액트가 쌩HTML코딩보다 편리한 이유
  데이터 바인딩이 쉽다. 
  애초에 이 라이브러리는 데이터 바인딩을 쉽게 하도록 도와주는 라이브러리이다.
- 데이터 바인딩이란?
  - 서버에서 받아온 데이터를 화면에 뿌려주는것
  - js에서는 document.getElementById().innerHTML = '' 이런식으로 데이터바인딩 했지만 리액트에선 이럴 필요가 없다. {변수명, 함수 등} 이렇게 하면 바인딩 완료
  - src, id, href 등의 속성에도 {변수명, 함수 등} 바인딩 가능
- JSX에서 style 속성 집어넣을 때 
  - style={ object 자료형으로 만든 스타일 }
  - style={ { color : 'blue', fontSize : '30px' } } ( '-'는 사용할 수 없음 js에서 뺄셈이기 때문에 camelCase 작명관습에 따라 속성명을 바꿔줘야한다.)