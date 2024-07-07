try {
    function repeatName(names, number){
        return names.repeat(number);
    };
    console.log(repeatName('solo ', 10));
} catch (error) {
    console.log(error);
}

// try {
//     console.log(text);
// } catch (error) {
//     // console.log(error.name);       // xatolikni otini
//     // console.log(error.message);   // xatolikni xabarini
//     // console.log(error.stack);   // hamma xatlikni chiqaradi
// }

// function bolish(a,b){
//     if (b ==0 ){
//         return new Error('miyyandni ishlat') // buyerga xoxlagan matinni xatoga yossak boladi
//     }
//     return a/b
// };

// try {
//     const res = bolish(10, 0);
//     console.log(res);
// } catch (error) {
//     console.log(error.message);
// }

import {res as m } from "./text.js";
console.log(m(10, 10));
