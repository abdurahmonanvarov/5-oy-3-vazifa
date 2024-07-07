//1-masala

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
// ];

// function createArr(arr){
//     for (const key in arr){
//         console.log(arr[key]);
//     }
// }
// console.log(createArr(students));

//2-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
 
// function findKattBall(arr){
//     let res = arr[0].score
//     arr.forEach(valeu => {
//        if (valeu.score > res){
//         res = valeu.score
//        }
//     })
//     return res
// }
// console.log(findKattBall(students));

// function findNmber(arr){
//     return students.reduce((max, student) => {
//         return student.score > max ? student.score : max;
//       }, students[0].score);
// }
// console.log(findNmber(students));

//3-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];

// function findA(arr){
//    let res =  arr.find(valeu => {
//     return valeu.name.startsWith('A');
//    });
//    return res;
// }
// console.log(findA(students));

// function findA(arr){
//     return arr.filter(valeu => valeu.name.startsWith('A'));
// };
// console.log(findA(students));

//4-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

// function findUrtacha(arr){
//     return arr.map(valeu => {
//         return valeu.score /2
//     })
// }
// console.log(findUrtacha(students));

// function findMIdleScore(arr){
//     return arr.map(element => element.score/2)
// };
// console.log(findMIdleScore(students));

//5-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];

//   function findJahon(arr){
//     return arr.find(element => element.name.startsWith('John'))
//   }
//   console.log(findJahon(students));

//6-masala
// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];

// function findIndex(arr, number){
//     return students.findIndex(element => element.score > number);
// }
// console.log(findIndex(students, 85));

//7-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];

// function findStatus(arr){
//     let res = [];
//     arr.forEach(element => {
//         if (element.status == 'active'){
//             res.push(element)
//         }
//     })
//     return res
// }
// console.log(findStatus(students));

//8-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];

// function findAge(arr){
//     return arr.every(element => element.age > 18 )
// };
// console.log(findAge(students));

//9-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//  function findNmber(arr){
//     return arr.some(element => element.score > 90)
//  }
// console.log(findNmber(students));

//10-masala
// const students1 = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const students2 = [
//     { name: 'Charlie', age: 23, score: 88, status: 'active' },
//     { name: 'David', age: 21, score: 90, status: 'inactive' }
//   ];

//   function addArr(arr1, arr2){
//     return arr1.concat(arr2)
//   }
//   console.log(addArr(students1, students2));

//11-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Alice', age: 23, score: 88, status: 'active' }
//   ];
// function findUnucalName(arr){
//     let res = [];
//     arr.forEach(element => {
//         if (element.name.startsWith(name)){
//            res.push(element)
//         }
//     })
//     return res
// };
// console.log(findUnucalName(students));

//12-masala
// const students = [
//     { name: 'alice', age: 20, score: 85, status: 'active' },
//     { name: 'bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   function bidWords(arr){
//     let res = [];
//     arr.forEach(element => {
//        res.push({
//         name: element.name.toUpperCase()
//        })
//     });
//     return res
//   };
//   console.log(bidWords(students));

//13-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
//     function findScore(arr){
//     let res = [];
//     arr.forEach(element => {
//        res.push({
//         score: element.score
//        })
//     });
//     return res
// }
// console.log(findScore(students));

//14-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' }
//   ];
// function takeKey(obc){
//     return Object.keys(obc[0])
// }
// console.log(takeKey(students));

//15-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function addObc(arr, element){
//     let res = (arr.concat(element))
//     return res
// };
// console.log(addObc(students, newStudent));

//16-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];

//   function deletStudents(arr, element){
//     return arr.filter(valeu => valeu.name != element)
//   }
// console.log(deletStudents(students,'Bob'));

//17-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
// function tekshirish(arr, element){
//     return arr.some(valeu => valeu.age > element)
// };
// console.log(tekshirish(students, 20));

//18-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
// function addValeu(arr){
//     return Object.values(arr[2])
// };
// console.log(addValeu(students));

//19-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   const updatedStudent = { name: 'Alice', age: 21, score: 90, status: 'active' };

//   function update(arr, element, element1){
//     return arr.map(valeu =>
//     {
//         if (valeu.name == element){
//             return (valeu, element1)
//         } else{
//               return valeu
//         }
//     }
//     )
//   };
//   console.log(update(students, updatedStudent));

//20-masala
// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
//   ];
// function findYungestStudent(arr){
//     let res = arr[0];
//     for (const key in res){
//         if (key.age < res.age){
//             res = key
//         }
//     }
//     return res
// };
// console.log(findYungestStudent(students));

//STRINGA OID MASALALAR

//1-masala
// const res = "Hello, world!";
// function string(str){
//    return str.substring(0, 5)
// };
// console.log(string(res));

//3-masala
// const res = "Hello world from JavaScript";
// function strdanFoydalanish(str){
//     return  str.split('')
// };
// console.log(strdanFoydalanish(res));

//4-masala
// const res = ["Hello", "world", "from", "JavaScript"];
// function useStr(str){
//     return str.join(', ')
// };
// console.log(useStr(res));

//5-masala
// const res = `"JavaScript"`;
// function useStr(str){
//     return str.replaceAll('a', '@')
// };
// console.log(useStr(res));

//6-masala
// const res = "   Hello, world!   ";
// function useStr(str){
//     return str.trim()
// };
// console.log(useStr(res));

//7-masala
// const res = "Hello, world!";
// function useStr(str, element){
//     return str.charAt(element)
// };
// console.log(useStr(res, 7));

//8-masala
// const res =  `"Hello, world!"`;
// function useStr(str, element){
//     return str.includes(element)
// };
// console.log(useStr(res, 'world'));

//9-massala
// const res =  "Hello, world!";
// function useStr(str, element){
//     return str.startsWith(element)
// };
// console.log(useStr(res, 'Hello'));

//10-masala
// const res = "Hello, world!";
// function useStr(str, element){
//     return str.endsWith(element) 
// };
// console.log(useStr(res, 'world!'));









