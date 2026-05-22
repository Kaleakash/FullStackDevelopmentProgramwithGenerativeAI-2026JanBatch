let bcryptjs = require("bcryptjs");
let originalPassword = "abc@xyz123";
let wrongPassword = "abcd";
async function hashPassword(password){
    let saltNumberRef = await bcryptjs.genSalt(10)
    let hashFormatPassword = await bcryptjs.hash(password,saltNumberRef);
    return hashFormatPassword;

}

async function compareHashPassword(originalPassword,hashPassword){
    let result = await bcryptjs.compare(originalPassword,hashPassword);
    return result;
}

async function passwordTask() {
console.log("Original Password "+originalPassword);
hashPasswordData   =  await hashPassword(originalPassword);
console.log("Hash Format Password "+hashPasswordData);
let resultData = await compareHashPassword(originalPassword,hashPasswordData);
if(resultData){
    console.log("password is correct")
}else {
    console.log("password is wrong")
}
} 


passwordTask();
