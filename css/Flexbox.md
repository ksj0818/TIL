## Flexbox



inline block의 문제점을 해결하기 위해 flexbox를 생각해냈다.

flexbox는 박스들을 어떤 곳이든 둘 수 있어서 좋음
그리고 아주 유연함, 2d(2차원) 레이아웃에서 아주 잘 작동함

자식 엘리먼트에는 아무것도 작성하면 안됨
박스들을 우리가 원하는 아무 곳에 움직이게 하려면 부모 엘리먼트를 flex container로 만들어야 함
이걸 하려면 display가 flex 라고 하면 됨
그러고 나면 이제 다른 많은 속성들을 수정할 수 있음
justify-content는 주축(main axis)에 적용
align-items 프로퍼티는 교차축(cross axis)에 적용
flex-container가 height를 가지고 있지 않으면 align-items를 사용하더라도 위치가 바뀌지 않음.

display:flex를 하면 해당 엘리먼트가 flex 컨테이너가 됨
flex 컨테이너는 두 개의 축을 가지고 있음(주축과 교차축)

주축과 교차축을 바꾸는 방법 : flex-direction을 수정하면 됨
flex-direction에는 두 가지 옵션이 있음 column과 row 

flex-wrap: wrap : 한 줄에 들어가는만큼 최대한 집어넣고 그게 되지 않으면 다음 줄로 옮김



