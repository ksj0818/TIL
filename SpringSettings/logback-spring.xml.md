## logback-spring.xml

~~~ xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

	 <!-- 변수 지정 -->
    <property name="LOG_DIR" value="C:/logs" />
    <property name="LOG_PATH_NAME" value="${LOG_DIR}/DemoWebServer.log" />
    
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
		<encoder>
			<pattern>%d{yyyy-MM-dd HH:mm:ss} [%-5p] [%F](%L\) : %m%n</pattern>
		</encoder>
	</appender>
	
	<logger name="jdbc" level="OFF" />
	<logger name="jdbc.sqlonly" level="OFF" />
	<logger name="jdbc.sqltiming" level="INFO" />
	<logger name="jdbc.audit" level="OFF" />
	<logger name="jdbc.resultset" level="OFF" />
	<logger name="jdbc.resultsettable" level="INFO" />
	<logger name="jdbc.connection" level="OFF" />
	
	<!-- TRACE > DEBUG > INFO > WARN > ERROR, 대소문자 구분 안함 -->
    <!-- profile 을 읽어서 appender 을 설정할수 있다.(phase별 파일을 안만들어도 되는 좋은 기능) -->
      <root level="INFO">
        <appender-ref ref="STDOUT" />
      </root>
  
</configuration>
~~~

