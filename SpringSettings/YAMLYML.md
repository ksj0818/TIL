## YAML/YML

- `yaml/yml `(YAML Ain't Markup Language)

  **YAML Ain’t Markup Language**의 약자로 데이터를 사람이 쉽게 읽을 수 있는 형태로 표현하는데 사용되는 데이터 직렬화 양식입니다. 데이터 직렬화(Data Serialization)란 구조화된 데이터를 특정 format으로 변환하는 개념입니다. 단, 변환된 format은 본래 구조화된 데이터로 복구될 수 있어야 하고 변환된 format 형태로 공유 혹은 저장되는 것을 허용해야 합니다. 
  JSON의 superset으로 볼 수 있다. YAML parser는 JSON을 이해할 수 있지만 반대로는 안된다.  YAML, JSON, XML 모두 사람의 가독성을 염두에 두고 설계된 포맷이지만 YAML이 좀 더 가독성에 포커싱이 많이 되어 있습니다. 이에 따라 JSON에 비해 구조가 좀 더 복잡하지만 사람이 보기엔 좀 더 자연스러운 형태입니다. YAML은 (property file)설정 파일의 목적으로 파이썬이나 루비에서 많이 쓰이는 거 같습니다. 하지만 JSON이 문법이 더 단순하기 때문에 훨씬 더 많이 사용되고 있고 YAML이 이를 뒤집기는 어려워 보입니다.

  스칼라(scalar) : 스트링 또는 숫자
  시퀀스(sequecce) : 배열 또는 리스트
  맵핑(mapping) : 해시 또는 딕셔너리, 키(key) / 값(value) 형태
  맵핑 시 키/값은 ' : ' 를 이용해서 구분한다. ex> key : value
  각 블록은 들여쓰기를 통해 구분.
  시퀀스는 들여쓰기와 -를 통해 표현
  #으로 시작하면 주석
  하나의 스트림으로 여러 개의 문서를 표현할 때에는 하이프 세 개(---)로 나누고, 마침표 세 개(...)는 스트림의 끝을 나타낸다.
  반복되는 값은 &를 통해 alias를 설정할 수 있다.

  