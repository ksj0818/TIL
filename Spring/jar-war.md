## 정리

- JAR(Java ARchive) 

  `.jar` 확장자 파일에는 Class와 같은 리소스와 속성 파일 , 라이브러리 및 액세서리 파일이 포함되어 있음

  java 어플리케이션이 쉽게 동작할 수 있도록 자바 프로젝트를 압축한 파일로 생각하면 됨

- WAR(Web Application aRchive) 

  `.war`  확장자 파일은 servlet / jsp 컨테이너에 배치 할 수 있는 웹 어플리케이션(web application) 압축 파일 포맷임 JSP , SERVLET , JAR , CLASS , XML, HTML, JAVASCRIPT, 등 Servlet Context 관련 파일들로 패키징 되어 있음 war는 웹 응용 프로그램을 위한 포맷이기 때문에 웹 관련 자원만 포함하고 있으며 이를 사용하면 웹 어플리케이션을 쉽게 배포하고 테스트 할 수 있음.

  원하는 구성을 할 수 있는 jar 포맷과 달리 war는 WEB-INF 및 META-INF 디렉터리로  사전 정의 된 구조를 사용하며 war를 파일을 실행하려면 Tomcat, Weblogic, Websphere 등의 웹 서버 (web)또는 웹 컨테이너(was) 가 필요함.

- EAR(Enterprise Archive) 

  `EAR` 파일은 JAVA EE(Enterprise Edition)쓰이는 파일 형식으로 한 개 이상의 모듈을 단일 아카이브로 패키징 하여 어플리케이션 서버에 일관적으로 올리기 위하여 사용되는 포맷.

- WAS(Web Application Server) 

- Lombok

  DTO , VO와 같은 클래스에서 Getter와 Setter를 자동으로 생성해준다.

  jar파일 실행 시킨 후 사용하고 있는 STS 선택하고 Install 하면 끝

  DTO, VO 클래스에 @Data Annotation을 사용해줘야함.




