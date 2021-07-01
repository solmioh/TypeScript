interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

var tony = introduce();
// union type을 쓰게 되면 공통적인 속성만 접근 가능
// console.log(tony.skill) 접근 불가능
console.log(tony.name);

// type 단언을 이용한 type 정의
if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer  {
    return (target as Developer).skill !==undefined;
}

if (isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}