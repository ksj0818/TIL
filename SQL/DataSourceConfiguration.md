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



