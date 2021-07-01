// interface Person {
//     name: string;
//     age: number;
// }

type Person = {
    name: string;
    age: number;
}

var seho: Person = {
    name: '세호',
    age: 30
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean }
function getTodo(todo: Todo){

}

// 타입 별칭과 인터페이스의 차이점
// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 
// 이름을 부여하는 것. 
// 타입 - 특정 타입을 가리키는 것. 확장 불가능 
// 인터페이스 - 참조하는 것. 확장 가능