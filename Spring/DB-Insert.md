## DB-Insert

- DB에 data 삽입하기
  1. 인터페이스 생성 (Service)
     메소드 생성
  2. 구현체 생성(ServiceImpl)
     앞에 생성한 Interface를 implements 하기.
     @Service Annotation, @Autowired 달아주기.
     SqlSession , nameSpace 생성
     sqlSession.insert(nameSpace + "productInsert", paramProductDto) 
     SQL.xml 파일에 파라미터값 전달.
     ![image-20200726191955615](C:\Users\toffp\AppData\Roaming\Typora\typora-user-images\image-20200726191955615.png)
  3. ProductSQL.xml에서 쿼리문 작성
     mapper namespace와 insert id 생성 후 그 안에 insert 쿼리문 작성하기.
  4. Controller에서 기능 호출
     @Controller, Autowired Annotation 붙여주기.
     ProductService 변수 만들기
     productService.insertProduct()에 파라미터 넣어주고 호출
     Restful API는 Body에서 데이터를 꺼내오기 때문에 항상 @ResponBoby를 써야한다.