## Spring Starter Project 환경설정

- configuration > pom.xml > application.yaml > mapper(SQL.xml) >
  WEB-INF > service > dto > controller > log4jdbc.log4j2.properties >
  logback-spring.xml



![image-20200726010556163](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726010556163.png)

- ctrl + n > new > spring starter Project 생성
  Type : Maver 
  Packaging : War
  Language : java
  Java Version : 8 

- pom.xml 파일에 jsp, jstl라이브러리, MyBatis, JSON, JSONObject, Jackson, log4jdbc DI 의존성 주입

- Configuration 생성

- ~~~ java
  package com.ksj.demo.configuration;
  
  import javax.sql.DataSource;
  
  import org.apache.ibatis.session.SqlSessionFactory;
  import org.mybatis.spring.SqlSessionFactoryBean;
  import org.mybatis.spring.SqlSessionTemplate;
  import org.mybatis.spring.boot.autoconfigure.SpringBootVFS;
  import org.springframework.beans.factory.annotation.Qualifier;
  import org.springframework.boot.context.properties.ConfigurationProperties;
  import org.springframework.context.ApplicationContext;
  import org.springframework.context.annotation.Bean;
  import org.springframework.context.annotation.Configuration;
  import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
  
  import com.zaxxer.hikari.HikariDataSource;
  
  @Configuration
  public class DataSourceConfiguration {
  	
  	private String packageName = "com.ksj.demo.";
  	private String dto = "dto";
  	
      @Bean(name = "dataSource")
      @ConfigurationProperties(prefix = "spring.datasource.hikari")
      public DataSource DataSource() {
  		return new HikariDataSource();
      }
  	
      @Bean(name = "sqlSessionFactory")
      public SqlSessionFactory sqlSessionFactory(
      		@Qualifier("dataSource") DataSource dataSource, 
      		ApplicationContext applicationContext) throws Exception {
      	
  		SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
          sqlSessionFactory.setDataSource(dataSource);
          sqlSessionFactory.setVfs(SpringBootVFS.class);
          sqlSessionFactory.setTypeAliasesPackage(packageName+dto);
          sqlSessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("mapper/*.xml"));//모든 xml파일
          sqlSessionFactory.getObject().getConfiguration().setMapUnderscoreToCamelCase(true);
          
          return sqlSessionFactory.getObject();
      }
  	
      @Bean(name="sqlSession")
      public SqlSessionTemplate sqlSession(SqlSessionFactory sqlSessionFactory) throws Exception {
          return new SqlSessionTemplate(sqlSessionFactory);
      }
         
  }
  ~~~

  ![image-20200726025202416](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726025202416.png)

  resources > mapper 폴더 생성 > SQL.xml파일 생성

  ![image-20200726025304005](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726025304005.png)

  application.properties 파일 복사해서 application.yaml 파일 생성 후 앞서 복사한 properties 파일은 삭제.

  spring.mvc.view.`prefix`, `suffix` 설정값 넣기

  spring.datasource.`hikari` (위의 사진처럼 spring.`mvc`와 같은 위치에 사용하면 spring 생략가능) 

  `hikari` :  DB Connection Pool

  - 자동 설정
    - `spring.datasource.url`이 모든 Datasource의 url이 된다.
  - 수동 설정 (Java Config)
    - `spring.datasource.jdbc-url`로 해야 HikariCP가 인식한다.

  jdbc url 규칙 : `jdbc:[DBMS이름]:[데이터베이스식별자]`

  ## Datasource

  순수 `jdbc`로 데이터베이스에 접근을 하면, 데이터베이스에 접근할 때마다 connection을 맺고 끊는 작업을 한다. 이 connection을 맺고 끊는 작업을 줄이기 위해 미리 connection을 생성해 두고, 데이터베이스에 접근하고자 하는 사용자에게 미리 생성된 connection을 제공하고 돌려받는다. 이 connection들을 모아두는 장소를 `connection pool`이라 하며, `Datasource`는 java 에서 connection pool을 지원하기 위한 인터페이스이다.

  

   

  

  
  
  

