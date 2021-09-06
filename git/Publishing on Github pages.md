## Publishing on Github pages

- 브랜치란 독립적으로 어떤 작업을 진행하기 위한 개념입니다. 필요에 의해 만들어지는 각각의 브랜치는 다른 브랜치의 영향을 받지 않기 때문에, 여러 작업을 동시에 진행할 수 있습니다.

- Git에서 Branch는 코드들의 평행세계라고 볼 수 있음.

- 대부분 사람들은 master branch에는 stable한 code를 올림.

- github에서 branch를 갖고 있으면 특별한 이름이 붙여진 특별한 branch를 가지고 있으면
  github에서 무료로 static 호스팅을 할 수 있도록 해줌, 즉 누구나 자신의 웹사이트를 무료로
  업로드 할 수 있고 그러면 github에서 공짜 URL을 제공해줌

- static website는 그냥 HTML, CSS, Javascript로만 이루어진 사이트를 의미함.

- 무료 호스팅 받는 방법 (몇 가지 룰이 있음)

  제일 중요한 건데, branch를 만들어야 한다는 것,
  그리고 이 branch의 이름은 `gh-pages`라고 해둬야 함 (선택사항이 아님 필수)
  이걸 건너뛰면 웹사이트를 publish하는데 실패함.
  'gh-pages' 라는 branch는 publish 될 거란 의미
  public 저장소여야만 함. private 저장소를 갖고 있으면 public 웹사이트로는 만들 수 없음
  대문자나 page로 오타를 내면 안됨
  gh-pages 브랜치 생성 > publish branch 클릭
  gh-pages branch에 어떤 코드가 있던지 그 코드는 온라인으로 업로드 됨 github 무료 호스팅으로.
  github.com 내 저장소에 branch 볼 수 있음, environments가 있고 github-pages 클릭하면
  deployments라고 하는게 있음 여기서 view deployment를 클릭하면 
  작업물을 URL로 친구들에게 보여줄 수 있음 (유저네임.github.io/저장소이름)

