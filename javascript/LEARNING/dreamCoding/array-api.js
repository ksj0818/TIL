// Quiz
// 1. 배열에서 문자열 만들기
const arr1 = ['수박🍉', '딸기🍓','문자열 만들기'];
// console.log(arr1.toString());
console.log(arr1.join(" "));  // 엘리쌤 답

// 2. 문자열로 배열 만들기
const arr2 = 'a,b, c, d';
console.log(arr2.split(" ")); // separator로 " "(스페이스)를 지정하면, 문자열을 구분자로 잘라서 각각의 잘라진 조각들을 배열에 저장하여 리턴

// 3. 이 배열을 다음과 같이 만듭니다: [5, 4, 3, 2, 1]
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.reverse());

// 4. 처음 두 요소 없이 새 배열 만들기
const arr4 = [1, 2, 3, 4, 5];
// console.log(arr4.splice(2));  배열 자체를 변경시키는 것이 아니라 새로운 배열을 만드는 것이 문제이니 slice()을 사용해야함
console.log(arr4.slice(2, 5));

// 5. 점수가 90인 학생을 찾기
// 6. 등록된 학생들의 배열을 만들기
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

const newStudent = [];
for (let student of students) {
  if (student.score >= 90) {
    console.log(student);   // 점수가 90보다 크거나 같은 학생 출력
  }
  student.enrolled ? newStudent.push(student) : null; // enrolled가 참인 경우 새로운 배열에 값 넣어주기
}
console.log(newStudent); 

// 7. 학생의 점수만 포함하는 배열 만들기 result should be: [45, 80, 90, 66, 88]
const score = students.map(student => student.score)
console.log(score);

// 8. 점수가 50점 미만인 학생이 있는지 확인
// const fallstudent = students.filter(student => student.score < 50);
const fallstudent = students.some(student => student.score < 50);
console.log(fallstudent);

// 9. 학생들의 평균 점수 계산
const average = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(average / students.length);

// 10. 모든 점수를 포함하는 문자열 만들기
console.log(score.toString());

// Bonus! '45, 66, 80, 88, 90' 낮은 점수가 제일 먼저 나오게해서 string으로 나오게 하기
const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join(", ")
console.log(result);