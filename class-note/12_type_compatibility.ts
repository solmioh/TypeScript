// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }

class Person {
    name: string;
}

var developer: Developer;
var person: Person;
//developer = new person();
// 오른쪽 객체가 더 많은 속성, 구조적으로 큰 관계를 가지고 있어야 함
// developer = person;
person = developer;

// 함수
var add = function(a: number) {
    //...
}

var sum = function(a: number, b: number) {
    // ...
}
sum = add;
//add = sum;

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2;
// notempty2 = notempty1;
