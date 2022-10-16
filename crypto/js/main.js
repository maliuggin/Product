// var longestCommonPrefix = function(strs) {
//     strs.forEach(element => {
//         let temporaryArray = element.split("");
//         let someArray = [];
//         for(let i = 0; i < temporaryArray.length ; i++){
//             if( temporaryArray[i] == "a" || temporaryArray[i] == "e" || temporaryArray[i] == "i" || temporaryArray[i] == "o" || temporaryArray[i] == "u" || temporaryArray[i] == "y"){
//                 continue
//             }else {
//                 someArray.push(temporaryArray[i])
//                 for(let j =i+1; j<temporaryArray.length; j++){
//                     if( temporaryArray[j] == "a" || temporaryArray[j] == "e" || temporaryArray[j] == "i" || temporaryArray[j] == "o" || temporaryArray[j] == "u" || temporaryArray[j] == "y"){
//                         break
//                         someArray = []
//                     }else{
//                         someArray.push(temporaryArray[j])
//                     }
//                 }
//             }
//         }
//     });
// };

function logPersong() {
    console.log(`Person: ${this.name}, age: ${this.age}`)
}

person1 = {
    name: "Dmitriy",
    age: 28,
}

person2 = {
    name: Alexey,
    age: 19,
}

function binder(object, fn) {
    
}