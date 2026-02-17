//let patternData = /pattern/i
//let patternData = /\d/
//let data = '1'      // valid 0 to 9 
//let data = 'a'
//let data = 'a1'

// let patternData = /^a/i
// //let data = 'abc'      // valid 0 to 9 
// //let data = 'xyz'
// let data = 'Abc'

// let phonePatternData = /\d[10]/i
// let phoneNumber = '1234567891'

// console.log(phonePatternData.test(phoneNumber)) 

// let pattern = /[abc]+/i             // start with a or b or c
// let data = 'ag';
// console.log(pattern.test(data))

let emailIdPattern = /[a-z]+[0-9]+@[a-z]+[.]com/i
let emailId = 'a1@b.com'
console.log(emailIdPattern.test(emailId))