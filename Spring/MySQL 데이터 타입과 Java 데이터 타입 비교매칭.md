## MySQL 데이터 타입과 Java 데이터 타입 비교/매칭

**좌 : MySQL , 우 : Java 데이터 타입**

BIT <-> Boolean
TINYINT <-> Integer
BOOL/BOOLEAN (TINYINT(1)) <-> Integer
SMALLINT <-> Unsigned 상관없이 Integer
MEDIUMINT <-> Integer, Unsinged라면 Long
INT <-> Integer, Unsigned라면 Long
BIGINT <-> Long, Unsigned라면 java.math.BigInteger
FLOAT <-> Float
DOUBLE <-> Double
DECIMAL <-> java.math.BigDecimal
DATE <-> java.sql.Date
DATETIME <-> java.sql.Timestamp
TIMESTAMP <-> java.sql.Timestamp
TIME <-> java.sql.Timestamp
YEAR <-> yearsIsDateType이 설정됐다면 java.sql.Date, 아니라면 Short
CHAR <-> 컬럼이 Binary로 설정되지 않았다면 String, 돼 있다면 byte[]
VARCHAR <-> CHAR와 동일
BINARY <-> byte[]
VARBINARY <-> byte[]
TINYBLOB <-> byte[]
TINYTEXT <-> String
BLOB <-> byte[]
TEXT <-> String
MEDIUMBLOB <-> byte[]
MEDIUMTEXT <-> String
LONGBLOB <-> byte[]
LONGTEXT <-> String
ENUM <-> String
SET <-> String

사용해보니 ENUM, SET은 지정된 값이 스트링으로 반환되었습니다. 예를 들어 MySQL 컬럼이 SET('남','여')로 지정되었고, 레코드 값이 '남'이라면 자바에서 String "남"을 반환합니다.

출처 :  https://honsal.blogspot.com/2017/04/mysql-java.html