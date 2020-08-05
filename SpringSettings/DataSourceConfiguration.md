## DataSourceConfiguration

~~~ java
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
        sqlSessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("mapper/*.xml"));	//상대경로 Resources : src/main/resources위치를 뜻함. 모든 xml 파일 넣어주기
        sqlSessionFactory.getObject().getConfiguration().setMapUnderscoreToCamelCase(true);
        
        return sqlSessionFactory.getObject();
    }
	
    @Bean(name="sqlSession")
    public SqlSessionTemplate sqlSession(SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
       
}
~~~

##   



 *** @Bean : 스프링에 필요한 객체를 생성**

 *** sqlSessionFactory() : MyBatis의 SqlSessionFactory를 반환해줍니다. 스프링부트가 실행할 때 DataSource객체를 이 메서드 실행 시 주입해서 결과를 만들고, 그 결과를 스프링내 빈으로 사용하게 됩니다.** 



출처: https://private.tistory.com/52?category=753861 [공부해서 남 주자]