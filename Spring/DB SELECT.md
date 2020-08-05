## DB SELECTLIST

- DB Table 조회

  1. Interface(Service) 생성 : public List<ProductDto> selectProductList(); 
     리스트 전체를 조회하기 때문에 파라미터는 필요없음.

  2. 구현체 생성 (ServiceImpl)
     class 위에 @Service Annotation 넣어주기.
     class 안에 @Autowired 넣어주기.
     SQL세션 생성 : private SqlSession sqlSession; 
     오류를 줄이기 위한 nameSpace String 변수 생성 : private String nameSpace = "Product."; 

     ![image-20200726204907778](https://user-images.githubusercontent.com/67783005/89118232-d8011800-d4de-11ea-941c-3f4a8340b77d.png)
     ![image-20200726204929751](https://user-images.githubusercontent.com/67783005/89118258-28787580-d4df-11ea-8f1c-772b2992a032.png)


  3. SQL.xml 파일에 쿼리문 작성
     `<!DOCTYPE mapper PUBLIC "mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3mapper.dtd">`
     ![image-20200726205550287](https://user-images.githubusercontent.com/67783005/89118268-42b25380-d4df-11ea-83e2-0991bd199e20.png)
     mapper namespace 생성 후 그 안에 select id 생성 및 쿼리문 작성.
     ![image-20200726205911155](https://user-images.githubusercontent.com/67783005/89118273-4fcf4280-d4df-11ea-9d07-41d3bbcacede.png)


  4. Controller에서 기능 호출
     class 위에 @Controller Annotation 넣어주기.
     class 안에 @Autowired 넣어주기 바로 Service 변수 생성하기.
     Restful API방식이기 때문에 @ResponBody를 꼭 넣어주기.
     @GetMapping("/api/products") 리스트를 조회하기 때문에 products로 만듬.
     ![image-20200726210824698](https://user-images.githubusercontent.com/67783005/89118279-68d7f380-d4df-11ea-8574-34012ea457ef.png)

     ![image-20200726210625164](https://user-images.githubusercontent.com/67783005/89118286-7d1bf080-d4df-11ea-9dd5-d013cf0700f4.png)

     
