## pom.xml DI의존성

​		<!-- jsp -->
​		<dependency>
​			<groupId>org.apache.tomcat.embed</groupId>
​			<artifactId>tomcat-embed-jasper</artifactId>
​			<scope>provided</scope>
​		</dependency>
​		<!-- jstl 라이브러리 -->
​		<dependency>
​			<groupId>javax.servlet</groupId>
​			<artifactId>jstl</artifactId>
​		</dependency>
​		<!-- MyBatis -->
​		<dependency>
​			<groupId>mysql</groupId>
​			<artifactId>mysql-connector-java</artifactId>
​			<scope>runtime</scope>
​		</dependency>
​        <dependency>
​            <groupId>org.springframework.boot</groupId>
​            <artifactId>spring-boot-starter-jdbc</artifactId>
​        </dependency>
​		<dependency>
​		    <groupId>org.mybatis.spring.boot</groupId>
​		    <artifactId>mybatis-spring-boot-starter</artifactId>
​		    <version>1.3.2</version>
​		</dependency>
​        <dependency>
​            <groupId>org.mybatis</groupId>
​            <artifactId>mybatis</artifactId>
​            <version>3.4.5</version>
​        </dependency>
​        <dependency>
​            <groupId>org.mybatis</groupId>
​            <artifactId>mybatis-spring</artifactId>
​            <version>1.3.1</version>
​        </dependency>
​        
        <!-- JSONObject -->
        <dependency>
    	    <groupId>com.googlecode.json-simple</groupId>
    	    <artifactId>json-simple</artifactId>
    	    <version>1.1.1</version>
    	</dependency>
    	<!-- Jackson  -->
    	<dependency>
    	    <groupId>com.fasterxml.jackson.core</groupId>
    	    <artifactId>jackson-databind</artifactId>
    	    <version>2.10.2</version>
    	</dependency>
    	<!-- log4jdbc -->
    	<dependency>
    	    <groupId>org.bgee.log4jdbc-log4j2</groupId>
    	    <artifactId>log4jdbc-log4j2-jdbc4.1</artifactId>
    	    <version>1.16</version>
    	</dependency>