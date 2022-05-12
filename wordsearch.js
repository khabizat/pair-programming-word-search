// Challenge
// Check to find the word Horizontally and Vertically.
// return true if the word is found, otherwise return false.
const wordSearch = (letters, word) => { 
    // What about if the matrix is an empty array?
    if (letters === []) return false;

    // 2D Array formula
    let newArr = [];
    for (let i = 0; i < letters.length; i++) {
        newArr[i] = [];
        for (let j = 0; j < letters[j].length; j++) {
    newArr[i].push(letters[j][i]);
    }
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    } 
    
    // What if the word is written vertically, not horizontally?
    const verticalJoin = newArr.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    } 

    return false;
}



module.exports = wordSearch




// 
// 
//   let newArr = [];
// for (let i = 0; i < letters.length; i++) {
//   newArr[i] = [];
//   console.log(newArr[i]);
//   for (let j = 0; j < letters[j].length; j++) {
//     newArr[i].push(letters[j][i]);
//     console.log(newArr[i]);
//   }
// }
// 
//   //