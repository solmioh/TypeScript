// ES2015 (ES6)
//This constructor function may be converted to a class declaration.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var capt = new Person('캡틴', 100);

class Person {
    // 클래스 로직
    // instance를 만들어 줌
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30); // 생성 되었습니다.
console.log(seho);