## validation

@NotNull
The annotated element must not be null. Accepts any type.
**모든 데이터 타입에 대해 null을 허용하지 않습니다.**
출처:https://javaee.github.io/javaee-spec/javadocs/javax/validation/constraints/NotNull.html

------


@NotEmpty
The annotated element must not be null nor empty. Supported types are:
CharSequence (length of character sequence is evaluated)
Collection (collection size is evaluated)
Map (map size is evaluated)
Array (array length is evaluated)

**null과 ""를 허용하지 않습니다.** 
출처:https://javaee.github.io/javaee-spec/javadocs/javax/validation/constraints/NotEmpty.html

------

@NotBlank
The annotated element must not be null and must contain at least one non-whitespace character. Accepts CharSequence.
**null과 ""와 " "(빈공백문자열)를 허용하지 않습니다.**
출처:https://javaee.github.io/javaee-spec/javadocs/javax/validation/constraints/NotEmpty.html



@AssertTrue     
@AssertFalse
true인지 false인지 검사. null은 체크하지 않음 

@Pattern 

값이 정규표현식에 일치하는지 검사. null은 체크하지 않음

