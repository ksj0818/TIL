## DB SELECTLIST

- DB Table 조회

  1. Interface(Service) 생성 : public List<ProductDto> selectProductList(); 
     리스트 전체를 조회하기 때문에 파라미터는 필요없음.

  2. 구현체 생성 (ServiceImpl)
     class 위에 @Service Annotation 넣어주기.
     class 안에 @Autowired 넣어주기.
     SQL세션 생성 : private SqlSession sqlSession; 
     오류를 줄이기 위한 nameSpace String 변수 생성 : private String nameSpace = "Product."; 

     ![image-20200726204907778](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726204907778.png)
     ![image-20200726204929751](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726204929751.png)

  3. SQL.xml 파일에 쿼리문 작성
     `<!DOCTYPE mapper PUBLIC "mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3mapper.dtd">`
     ![image-20200726205550287](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726205550287.png)
     mapper namespace 생성 후 그 안에 select id 생성 및 쿼리문 작성.
     ![image-20200726205911155](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726205911155.png)

  4. Controller에서 기능 호출
     class 위에 @Controller Annotation 넣어주기.
     class 안에 @Autowired 넣어주기 바로 Service 변수 생성하기.
     Restful API방식이기 때문에 @ResponBody를 꼭 넣어주기.
     @GetMapping("/api/products") 리스트를 조회하기 때문에 products로 만듬.
     ![image-20200726210824698](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726210824698.png)

     ![image-20200726210625164](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726210625164.png)

     