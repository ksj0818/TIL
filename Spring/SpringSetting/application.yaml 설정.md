## application.yaml 설정

~~~ spring:
  mvc:
    view:
      prefix: /WEB-INF/
      suffix: .jsp
  datasource:
    hikari:
      jdbc-url: "jdbc:log4jdbc:mysql://localhost:3306/ksj?useSSL=false&allowMultiQueries=true"
      username: "root"
      password: "abcd123$"
      idle-timeout: 30000
      connection-timeout: 30000
~~~

