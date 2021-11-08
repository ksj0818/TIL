## B트리, 이진트리란 무엇인가?

### 목 차

1. B트리란?
2. 이진트리란?
3. 용어 정리
4. 출처

- B트리란?
  B트리는 데이터를 정렬하여 탐색, 삽입, 삭제 및 순차 접근이 가능하도록 유지하는 트리형 자료구조이다.

  - B트리 특징

    ![image-20211104150803717](https://user-images.githubusercontent.com/88412911/140266086-45f626fe-1730-4e26-9cad-f35e275c6df3.png)
    

    B트리는 위처럼 노드 하나에 여러 데이터가 저장될 수 있다.
    각 노드 내 데이터들은 항상 정렬된 상태이며, 데이터와 데이터 사이의 범위를 이용하여 자식 노드를 가진다.
    그러므로 자식 노드 개수는 (n+1)을 가진다.
    항상 좌, 우 자식노드 개수의 밸런스를 유지하므로 최악의 경우에도 무조건 탐색 시간이 O(logN)을 가지게 된다.

    ![image-20211104152537711](https://user-images.githubusercontent.com/88412911/140267743-70e52b3a-65b1-4c95-80e8-aebcc6239298.png)
    표시한 부분을 한번 보면 마치 배열처럼 정렬이 되어있다, 실제 메모리 상에 차례대로 저장이 되어있는 것이다. 같은 노드 공간의 데이터들끼리 굳이 자식 노드처럼 참조 포인터 값으로 접근할 필요가 없다. 
    즉, 같은 노드 상 데이터를 탐색할 때는 포인터 접근을 하는 것이 아니라 실제 메모리 디스크에서 바로 다음 인덱스의 접근을 하는 것이다
    **탐색 방식 순서**

    1. 200이라는 값이 있는지 확인하기 위해, 100, 155, 226이 저장되어 있는 Root 노드에 있는 데이터들을 탐색한다. 실제 메모리 디스크 상 순차적으로 저장되어 있는 데이터들을 빠르게 탐색한다
    2. Root 노드에 200이 없다. 200은 155와 226 사이의 값이므로, 해당 범위에 존재하는 자식 노드를 가리키는 포인터가 존재하는지 확인한다. 있으면 포인터를 통해 해당 자식 노드로 접근한다. 자식 노드는 168, 200의 값을 가지고 있다
    3. 실제 메모리 디스크 상 순차적으로 저장되어 있는 168, 200의 값을 빠르게 탐색한다. 찾으려 했던 200의 값을 찾아낸다.

  - B트리 장점
    균형이 맞춰진 트리의 장점은 이진 탐색을 활용할 수 있다는 점이다.
    균형이 갖춰진 트리는 O(log n) 시간의 검색 시간을 갖는다.
    B트리도 이러한 균형 트리의 일종이다.
    ![image-20211104145240998](https://user-images.githubusercontent.com/88412911/140264775-2a74eb68-7c39-477e-8652-1f432febfd6f.png)

  - B트리 용도
    B 트리는 Balanced- Tree 의 일종으로 트리의 균형이 맞다. 즉 트리내에서 삽입과 삭제가 일어나더라도 최대한 균형있는 트리 형태를 유지하여 이진 탐색의 장점을 살린 트리이다.
    모든 면으로 DB 인덱스 용도로 가장 적합한 자료구조이다. 그 이유는 아래와 같다.

    1. 항상 정렬된 상태로 특정 값보다 크고 작은 부등호 연산에 문제가 없다
    2. 참조 포인터가 적어 방대한 데이터 양에도 빠른 메모리 접근이 가능하다
    3. 데이터 탐색뿐 아니라, 저장, 수정, 삭제에도 항상 O(logN)의 시간 복잡도를 가진다

- 이진트리란?
  이진트리(Binary tree)란 모든 노드들이 둘 이하의 자식을 가진 트리입니다.
  ![image-20211104125626812](https://user-images.githubusercontent.com/88412911/140255622-52bb66a4-66c3-439e-bcee-3c51272cdba8.png)

- 이진트리 유형

  - *전 이진트리 (Full Binary Tree or Strict Binary Tree)*
    전 이진트리는 모든 노드가 0개 또는 2개의 자식을 갖는 트리이다.
    ![image-20211104130238903](https://user-images.githubusercontent.com/88412911/140256042-bb3afdaf-d96f-470d-838e-1e6056f52e3e.png)

  - *완전 이진 트리(Complete Binary Tree)*
    완전 이진 트리는 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있는 트리이다.
    마지막 레벨은 꽉 차 있지 않아도 되지만 노드가 왼쪽에서 오른쪽으로 채워져야한다.
    ![image-20211104130447416](https://user-images.githubusercontent.com/88412911/140256199-03eb556c-adae-428c-a918-b93557a3d7ca.png)

  - *포화 이진 트리(Perfect Binary Tree)*
    포화 이진 트리는 모든 내부 노드가 두 개의 자식 노드를 가지며 모든 잎 노드가 동일한 깊이 또는 레벨을 갖는다.
    ![image-20211104131422318](https://user-images.githubusercontent.com/88412911/140256982-b52687e4-1a23-49c7-b932-ee8d4868b1ba.png)

  - *균형 이진 트리(Balanced Binary Tree)*
    균형 이진 트리는 왼쪽과 오른쪽 트리의 높이 차이가 모두 1만큼 나는 트리이다.

    ![image-20211104131755499](https://user-images.githubusercontent.com/88412911/140257282-7c4f041e-3e1a-4c9f-a8ba-01653a344db5.png)

- 이진트리 속성

  - ![image-20211104132653305](https://user-images.githubusercontent.com/88412911/140257996-44a8c7de-fef0-4e9e-aa04-8a001d69daf5.png)
  - ![image-20211104132804446](https://user-images.githubusercontent.com/88412911/140258065-a43e1cbf-d08e-4dcd-9dac-38c6414fac14.png)

- 이진트리 표현
  이진트리는 배열 또는 연결 리스트로 표현이 가능, 다음과 같은 속성 때문에 배열로 표현이 가능하다.

  - 루트 노드의 인덱스 i가 0인 경우

    - 노드 i에 왼쪽 자식은 2*i+1 번째 노드이다.
    - 노드 i에 오른쪽 자식은 2*i+2 번째 노드이다.
    - 노드 i에 부모는 (i-1)/2 번째 노드이다.

  - 루트 노드의 인덱스 i가 1인 경우

    - 노드 i에 왼쪽 자식은 2*i 번째 노드이다.
    - 노드 i에 오른쪽 자식은 2*i+1 번째 노드이다.
    - 노드 i에 부모는 i/2 번째 노드이다.

    ![image-20211104135245387](https://user-images.githubusercontent.com/88412911/140259975-38c7e832-7382-44b0-a437-aa4b26a92509.png)

    ###### 			배열로 표현한 완전이진트리 - 배열공간을 효율적으로 쓰고있다.

- 이진트리 용도
  트리는 데이터를 저장할 수 있으며 시간복잡도 상으로 우수하기 때문에 여러가지 부수적인 자료구조나 알고리즘을 만드는데도 사용되게 된다.
  
- 용어 정리 
  - Node: 트리에서 데이터를 저장하는 기본 요소 (데이터와 다른 연결된 노드에 대한 Branch 정보 포함)
  - Root Node: 트리 맨 위에 있는 노드
  - Level: 최상위 노드를 Level 0으로 하였을 때, 하위 Branch로 연결된 노드의 깊이를 나타냄
  - Parent Node: 어떤 노드의 다음 레벨에 연결된 노드
  - Child Node: 어떤 노드의 상위 레벨에 연결된 노드
  - Leaf Node (Terminal Node): Child Node가 하나도 없는 노드
  - Sibling (Brother Node): 동일한 Parent Node를 가진 노드
  - Depth: 트리에서 Node가 가질 수 있는 최대 Level

![image-20211104141319604](https://user-images.githubusercontent.com/88412911/140261502-bbfc86ac-2600-4acc-a6b3-154f184b9b5d.png)

- 출처
  - https://helloinyong.tistory.com/296
  - https://yoongrammer.tistory.com/69https://yoongrammer.tistory.com/69
  - https://pangyo-datascientist.tistory.com/entry/%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%AC-binary-Tree

