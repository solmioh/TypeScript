// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);


var seho: string | number | boolean;
// union type: 하나 이상의 타입을 쓸 수 있는 것
// 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
function logMessage(value: string  | number){
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
// function askSomeone(someone: Developer | Person) {
//     // 공통된 속성(name)만 접근 가능
//     //type safe하지 않음
//     // 인터페이스나 특정 구조체를 union type으로 쓸 경우 보장된 속성에 대해서만 제공
//     // someone.name;
//     // someone.skill;
//     // someone.age;
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', age: 100 });

// intersection(합집합)
// Developer와 Person의 속성을 모두 포함하는 하나의 type = someone
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 34})

var capt: string & number & boolean;
var seho: string | number | boolean;
