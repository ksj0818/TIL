## CSS Basic

- 의미, 정의

  - Cascading Style Sheet
    개발자가 지정한 것 > 사용자가 지정한 것 > 브라우저에서 알맞게 떨어지는 느낌이 Cascading임
    cascading 연결고리를 끊는 딱 하나 존재함 바로 important.

- 선택자

  - HTML의 어떤 태그들을 고를 것인지를 규정하는 문법이다.
  - Universal: *(별모양)을 이용하면 모든 태그들을 고르는 것이다.
  - type:  Tag의 이름을 쓰면 태그를 고른다.
  - ID: #id 해시마크를 이용해서 아이디를 작성하면 해당하는 아이디만 골라낸다.
  - Class: 클래스는 .을 이용한다. 
  - State: 태그 옆에 상태를 달 수 있다.
  - Attribute: [] 어트리뷰트를 골라서 해당하는 속성값들만 골라서 작성할 수 있다.

- position

  - static: 기본 값으로 흐름을 벗어나지 않는다.
  - relative: 원래 있던 자리에서 이동
  - absolute: 담겨있는 박스안에서 이동
  - fixed: 박스에서 완전히 벗어나서 페이지 상에서 이동하는것을 뜻한다.
  - sticky: 원래 있어야 하는 자리에 있으면서 대신에 스크롤링 되어도 없어지지 않고 기존 자리에 그대로 붙어있음.

- display

  - inline: 안에 존재하는 콘텐츠에 따라 크기가 가변한다.
  - black: row당 하나만 위치할 수 있다.
  - inline-block: 한 row에 여러 개 위치할 수 있다.

- caniuse.com 호환성 검사 사이트

- FlexBox

  - 컨텐츠에 따라 위치를 결정한다.
  - 1차원으로 수평, 수직 영역 중 하나의 방향으로만 레이아웃을 나눌 수 있다.

- Grid

  - 주어진 레이아웃에 따라 위치를 결정한다.
  - 2차원적으로 수평, 수직을 동시에 영역을 나눌 수 있다.

- Resources

  - Material Design Color Tool
    https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFA726

    