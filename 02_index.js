// 제일 많이 사용할 구문 

// 개발자는 객체를 잘 사용하면 됩니다. 💁‍♀️


// 반복할 때, 딱 비슷한 패턴으로 나와야 함 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 


// if 문 (비교문)
if (false) {

    // if 문의 괄호 한이 true 면 > 여기 있는 구문을 실행시킴
    // 괄호 안이 false 면 > 실행 안 해 
    console.log()
        // [해석] 실행할 일이 없으니까 > 불이 꺼져있음. ⭐

    // 여기 내용을 실행시키고 싶기고 하고, 않기도 함. 이걸 컨트롤 하는 방법은? ⭐⭐⭐⭐⭐ 
        // 1) 괄호 안에 true, flalse 가 나와야 해
        // 2) 그러려면, ( ) 안에 '연산자' 를 넣어주면 돼 (왜냐면, 연산자의 결과값은 true, false 니까.)
        // 3) 결국, ( ) 안에, '연산자' 넣으면 -> { } 영역, 컨트롤 가능!
}

let age = 5; 
let age2 = 5;

// age = 나야! 
    //  조건이 true 여야 > 실행 ⭐⭐
// if (age < 100000) {
//     console.log ("내 나이가 작군...😥");
// }


// false 일 때, 실행 시키려면? -> if, else 문 활용 ⭐⭐
if (age < age2) {
    // true 면 이게 실행
    console.log("true가 실행되어서, 나이가 작네에");
} else {
    // false 이면 여기에서 실행
    console.log("flase가 실행되어서, 오잉, 더 크네");
}



// 참, 거짓, 말고 더 없나? 
    // if, else if, else 활용

if (age < age2) {
    // if 문이 맞으면 여기 실행
        // [해석] age vs age2 -> false 니까, -> 여기는 pass 
}
else if (age == age2) {
    // if 가 틀리면, 여기로 와서, 조건이 맞는지 확인 -> 맞으면 실행
        // [해석] 5 == 5 니까, 같아 -> 그러니까, 이 부분을 실행 

    console.log("else if 문에서, age==age2 비교했고, true 여서, else if 문이 실행");

}
else{
    // else if 도 안 맞으면 -> else 로 와서 실행
        // else 에는 '조건' 이 없네? ⭐⭐⭐⭐⭐⭐     
    console.log("나는 두 번째, else 문 이야");
}


// 반복문, for문 
//     여러번 반복 실행 해야 할 구문이 있을 때 


    // // 변수 선언 
    // let b = 5; 
    // for (let a = 1; a < b; a++) {
    //     console.log(a);
    // }
    //     [for 문 실행 순서 해석]
    //         1) [선언] 변수 선언하고 -> 값을 확인 
    //         2) [비교] a 가 b 보다 큰지 확인 -> true면 for 문 안에 있는 걸 실행 
    //         3) [구문 실행] { 안에 있는거 실행 } 
    //         4) [값 증가]
    //         5) [비교] true 이면 -> '구문실행' 
    //         6) [구문 실행] {안에 있는거 실행함}
    //         7) [값 증가] 
    //         ... 이 과정이 반복
    //         8) [비교] 이 비교가 만약, false 이면, 그때, '반복문 종료'
    //         [주의] ⭐ 무한으로 반복 시키면, 사이트가 터져~ / 노노!! / 조건식을 잘 확인해야 함. 




// --------------------------------------------------------------------------------
// [과제✅] 반복문으로 구구단 만들기 ⭐⭐ 

// for (let a = 2; a <= 9; a++) {

//     for (let bbb = 1; b <= 9; bbb++) {
    
//         console.log(a * bbb);
    
//     }
// }

// 해본것 🔵
for (let c = 2; c <= 9; c++) {
    for (let d = 1; d <= 9; d++) {
        console.log( c, "x", d, "=", c * d );
    }
}


// [로직 이해]
//     1st 2 x 1 = 2
//     2nd 2 x 2 = 4 
//     3rd 2 x 3 = 6 
//     변화하는 부분이 2부분 
//     이때, 마리오, 사각형 처럼, 
//     1 row line 고정되고, 옆으로 쭉 나오고, (a열,b열,c열,d열...)
//     2 row line 고정되고, 옆으로 쭉 나오고, (a열,b열,c열,d열...)
//     이런 식의 로직은 많이 사용되지 않을까. 



// ------------------------------------------------------------------------------------
// [과제✅] 수상자 과제 

// // 1️⃣ 첫 시도 
// let students = ["정덕진", "손흥민", "박지성", "👲", "🎢"];
// let award = ["정덕진"];

// 학생 배열을 쭉 본다. 
// 수상자 배열에 있는 학생이 있으면, -> console.log 로 호출해서 보여줘

// for 하나씩 가져와 in 학생들}
//     if (가져온게 == 수상자) {
//         보여줘
//     }


// for (i = 0; i < 4; i++) {
//     if (award[i] == students[i]) {
//         console.log(students[i])
//     }
// }


// 2️⃣ 두 번째 시도 
// let students_ver2 = ["정덕진", "손흥민", "박지성", "메롱", "누구?"];
// let awards_ver2 = ["정덕진", "메롱"];

// for (i = 0; i < 5; i++) {

//     for (j = 0; i < 2; j++) {

//         if (students_ver2[i] == awards_ver2[j]) {
//             console.log(students_ver2[i]);
//         }
//     }
// }


// 3️⃣ 세 번째 시도 

let students_ver3 = ["정덕진", "메롱", "손흥민", "호나우두", "베베토"];
let awards_ver3 = ["베베토", "정덕진", "메시"];
// console.log(awards_ver3[2])
// console.log(students_ver3[1] == awards_ver3[1])

for (i = 0; i < 5; i++) {
    for (j = 0; j < 3; j++) {
        
        if (students_ver3[i] == awards_ver3[j]) {
            console.log("수상자는👏" , students_ver3[i])
        }
    }
}

// for (i = 0; i < 5; i++) {

//     for (j = 0; j < 3; j++) {

//         console.log(students_ver3[i] == awards_ver3[j])
//             // console.log(students_ver3[i])
        
//     }



// --------------------------------------------------------------------------------
// [과제✅] 3의 배수 구하기 
// 60번 반복문? 


let remember = [];

// 0 + 1 = 1 

for (i = 0; i < 60; i++) {
    a = i + 1
    // ⭐⭐⭐⭐⭐ 배열 값 넣어주기 
    remember.push(a);

    // console.log(remember)
}

console.log(remember)

// console.log(number[1]);
// console.log( 3 % 3 == 0)

// console.log(number[1] % 3 == 0)

for (let i = 0; i < 60; i++) {
    if (remember[i] % 3 != 0) {
        console.log(remember[i], "3의 배수가 아닌 경우" )
    }
    else {
        console.log(remember[i], "3의 배수, or 짝👏")
    }
}

// ---------------------------------------------- 혼자 연습 










