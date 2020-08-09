## 1. log4j 란?

log for java 의 약자로서 로깅을 위한 라이브러리이다. 로깅 라이브러리를 별도로 사용하지 않는다면, system.out.println()으로 할 것이다. 개발환경이야 상관없겠지만, 운영환경에서는 리소스낭비이다. 그렇다고 안쓰자니 에러상황에서 로깅이 아쉽다. 이럴 때 log4j 를 사용하면 해결할 수 있다.

### 특징

1. system.out.println() 에 비해 속도가 훨씬 좋다.
2. 멀티스레드 환경에서 사용해도 안전하다.
3. 계층적인 로그 설정과 처리가 가능하다.
4. 출력을 콘솔, 파일, 원격, email, DB 등 다양하게 가능하다.

## 2. slf4j

Simple Logging Facade For Java 의 약자로서 log4j, logback, commons-logging 같은 로깅 프레임워크를 위한 추상화를 제공해준다. 예를들어 log4j를 사용하다가 log4j2로 로깅프레임워크를 교체하면 많은 코드수정이 발생한다. 이런 점을 고려하면 slf4j를 사용하고 log4j를 연결하는 것이 좋다.

## 3. spring의 기본로깅

스프링은 기본적으로 commons-logging 를 사용한다. 따라서 logback, log4j 등으로 교체한다면 제거해주는 것이 좋겠다.

## 4. Log4j 와 slf4j 를 maven 의존성 추가하기

1. spring-context , commons-dbcp2에서 commons-logging 을 exclusion 처리
2. slf4j-api , jcl-over-slf4j(위에서 jcl을 제거했기 때문에 겉으론 jcl유지하며 내부적으론 slf4j-api 호출) , slf4j-log4j12(slf4j의 구현체로 log4j) 를 추가
3. log4j-core 를 추가

### pom.xml

```
<!-- Properties  -->
<properties>
    <slf4j.version>1.7.25</slf4j.version>
    <log4j.version>2.11.0</log4j.version>
</properties>

<!-- logging -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>${slf4j.version}</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>jcl-over-slf4j</artifactId>
    <version>${slf4j.version}</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>${slf4j.version}</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>${log4j.version}</version>
</dependency>
```

## 5. log4j 의 로그레벨

위에서부터 심각한 정도이다.

- FATAL : 아주 심각한 에러가 발생한 상태
- ERROR : 요청을 처리하는 중 문제가 발생한 상태
- WARN : 처리 가능한 문제이지만, 향후 에러의 원인이 될 수 있는 상태
- INFO : 로그인, 상태변경과 같은 정보성 메세지
- DEBUG : 개발시 디버그 용도로 사용
- TRACE : 디버그 레벨이 너무 광범한 것을 해결하기 위해서 좀 더 상세한 상태를 나타냄





출처: https://sjh836.tistory.com/161 [빨간색코딩]