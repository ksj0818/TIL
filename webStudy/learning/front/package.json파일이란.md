## package.json파일이란?

package.json 파일에는 프로젝트와 관련된 메타데이터가 담깁니다. 앞서 [npm 을 패키지를 주고 받는 장소라고 설명](https://oneroomtable.tistory.com/entry/NPM-이란-무엇이며-어떻게-작동할까요)했는데요. package.json 은 주고 받는 패키지에 대한 상세 설명서라고 할 수 있습니다. 즉, 패키지의 이름, 버전, 데이터 등이 담긴 파일이 바로 package.json입니다. 이러한 정보들은 모두 npm 뿐만 아니라 패키지의 최종 사용자에게 무척 중요한 것들입니다.

이러한 package.json 파일은 보통 Node.js 프로젝트의 루트 디렉토리에 위치해 있으며, npm 은 이를 통해 프로젝트를 식별하고, 프로젝트의 종속(dependency) 사항들을 처리합니다.

출처: https://oneroomtable.tistory.com/entry/packagejson-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EB%A9%B0-%EC%96%B4%EB%96%A4-%EC%97%AD%ED%95%A0%EC%9D%84-%ED%95%A0%EA%B9%8C%EC%9A%94