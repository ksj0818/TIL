## MariaDB joinDate

- MariaSQL 에서 현재시간 넣기

  dto에 String 변수 joinDate 생성. 

![image-20200802160350285](https://user-images.githubusercontent.com/67783005/89118361-2236c900-d4e0-11ea-99db-72c53b5e2a3c.png)

- NOW()함수 SQL쿼리문에 넣어주기 
  
![image-20200802160541035](https://user-images.githubusercontent.com/67783005/89118377-472b3c00-d4e0-11ea-8c0d-375e1ec427d0.png)



  joinDate는 클라이언트로부터 입력 받는 것이 아니기 때문에 쿼리문에 함수를 직접 넣어준다.
  HeidiSQL에서는 위에 사진처럼 now()를 쿼리문에 넣어서  데이터가 삽입 되었는데

  xml파일에서 멍청하게 #{joinDate} 이렇게 넣어서 postman으로 삽입할 때 에러 발생.
  또한 dto에서 String 변수로 생성하지 않고 oracle의 sysdate처럼 Date로 선언한 것도 에러 발생 원인인듯하다.
  해결하고보니 당연히 저렇게 쿼리문을 작성해야하는데 왜 그렇게 복잡하게 생각해서 일을 처리하는지..

  
