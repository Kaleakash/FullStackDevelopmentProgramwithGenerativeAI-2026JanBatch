let bcryptjs = require("bcryptjs");

class PasswordHashing{

    async hashPassword(password){
    let saltNumberRef = await bcryptjs.genSalt(10)
    let hashFormatPassword = await bcryptjs.hash(password,saltNumberRef);
    return hashFormatPassword;
    }

    async compareHashPassword(originalPassword,hashPassword){
        let result = await bcryptjs.compare(originalPassword,hashPassword);
        return result;
    }

}

let passwordHashing = new PasswordHashing();
module.exports =passwordHashing; 
