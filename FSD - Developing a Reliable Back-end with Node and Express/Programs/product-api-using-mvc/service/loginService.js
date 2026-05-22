const loginRepository =require("../repository/loginRepository");
const passwordHashing = require("../middleware/passwordHashing");

class LoginService {

    async signUp(loginData) {
        let result = await loginRepository.findUser(loginData.emailId);
        if(result.length==0){
            let originalPassword = loginData.password;
            let hashPassword = await passwordHashing.hashPassword(originalPassword);
            loginData.password = hashPassword;

        return await loginRepository.signUp(loginData);
        }else {
            return "EmailId must be unique";
        }
    }
    async signIn(loginData) {
        let result = await loginRepository.findUser(loginData.emailId);
        if(result.length==0){
            return "Email Id is wrong";
        }else {
            let user = result[0];
            let originalPassword = loginData.password;
            let hashFormatPasswordFromDb = user.password
            let passwordValid = await passwordHashing.compareHashPassword(originalPassword,hashFormatPasswordFromDb);
            if(passwordValid){
                return "Successfully login";
            }else {
                return "Password is wrong";
            }
        }
    
    }
 
}
let loginService = new LoginService();
module.exports = loginService;