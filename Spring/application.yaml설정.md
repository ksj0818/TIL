## application.yaml설정

~~~ yaml
spring.mvc.view.prefix: /WEB-INF/  //suffix: .jsp
      .datasource.hikari.jdbc-url: "jdbc:log4jdbc:mysql://localhost:3306/ksj?useSSL=false&allowMultiQueries=true"
      					.username: "root"
						.password: "abcd123$"
						.idle-timeout: 30000
						.connection-timeout: 30000
~~~

![image-20200726025304005](https://user-images.githubusercontent.com/67783005/89118419-ab4e0000-d4e0-11ea-8288-b373fada4c7c.png)

application.properties 파일 복사해서 application.yaml파일 생성 후 properties 파일은 삭제.
spring.mvc.view.prefix,suffix에 설정값 넣기
spring.datasource.hikari.jdbc-url 설정값 넣기. (hikari: DB Connection Pool)

- 자동 설정

  spring.datasource.url이 모든 Datasource의 url이 된다.

- 수동 설정 (Java Config)

  spring.datasource.jdbc-url로 해야 HikariCp가 인식한다.

jdbc url 규칙 : jdbc:[DBMS이름] : [데이터베이스식별자]

## Datasource

순수 `jdbc`로 데이터베이스에 접근을 하면, 데이터베이스에 접근할 때마다 connection을 맺고 끊는 작업을 한다.
이 connection을 맺고 끊는 작업을 줄이기 위해 미리 connection을 생성해 두고, 데이터베이스에 접근하고자 하는 사용자에게 미리 생성된 connection을 제공하고 돌려받는다. 이 connection들을 모아두는 장소를 `connection pool`이라 하며,  `Datasource`는 java에서 connection pool을 지원하기 위한 인터페이스이다.
